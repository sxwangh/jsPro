<template>
  <div class="content-text" @mouseup.self="handleSelect({ev:$event,segmentId:id})">
    <template v-if="groups.length">
      <template v-for="(currGroup, i) in groups">
        <template
          v-if="i === 0 && text.slice(0, currGroup.start - 1).length"
        >{{text.slice(0, currGroup.start - 1)}}</template>
        <template v-else></template>
        <anno-group
          :segmentId="id"
          :key="'group-' + i"
          class="anno-group"
          :group="currGroup"
          :groupIndex="i"
          :value="groupMap[i]"
          :content="text.slice(currGroup.start - 1, currGroup.end)"
          :enableEdit="enableEdit"
          :errorPos="validErrorPos"
        />
        <template
          v-if="text.slice(currGroup.end,groups[i + 1]? groups[i + 1].start - 1: undefined).length"
        >{{text.slice(currGroup.end,groups[i + 1]? groups[i + 1].start - 1: undefined)}}</template>
        <template v-else></template>
      </template>
    </template>
    <template v-else>{{text}}</template>
  </div>
</template>
<script>
import {
  getPreviousSiblings,
  getParentsByClassName,
  debounce,
} from '@/utils/util.index';
import { mapState } from 'vuex';
import AnnotationGroup from './AnnotationGroup';

export default {
  components: { 'anno-group': AnnotationGroup },
  props: {
    id: [Number, String],
    text: [String],
    annotations: [Array],
    enableEdit: [Boolean],
    parserData: [Array],
    errorPos: [Array],
    validAnnoMap: [Object],
    relations: [Array],
  },
  data() {
    return {
      validErrorPos: this.errorPos || [],

      selection: null,
      selectedStartOffset: 0,
      selectedEndOffset: 0,
      selectedText: '',
      groups: [],
      groupMap: {},
      cascaderStr: '', // cascader中输入的搜索词
      filterStr: '', // 实际起作用的搜索词,debounce后被赋值为cascaderStr
      // debouce方法
      debounceRenderAnnoTypeArr: debounce(null, 500, () => {
        this.filterStr = this.cascaderStr;
      }),

      // 关系标注
      panelValue: [],
      currentAnno: null,
      panelInit: true,

      showPanel: false,
    };
  },
  computed: {
    ...mapState(['annoTypes', 'annoRelations', 'relationMap', 'version']),
    annoPositions() {
      const arr = [];
      [].concat(this.parserData, this.annotations).forEach((anno, index) => {
        if (anno.segmentId === this.id) {
          arr[index] = `${anno.startOffset},${anno.endOffset}`;
        }
      });
      return arr;
    },
    annoTypeArr() {
      const arr = Object.values(this.annoTypes)
        .sort((a, b) => {
          if (this.filterStr && this.filterStr.trim().length) {
            const str = this.filterStr.trim();
            console.log(str, a.ctgrName);
            let aIndex = a.ctgrName.indexOf(str);
            let bIndex = b.ctgrName.indexOf(str);
            if (aIndex === -1) { aIndex = Infinity; }
            if (bIndex === -1) { bIndex = Infinity; }
            return aIndex - bIndex;
          }
          return 0;
        })
        .map((anno, index) => {
          const obj = {
            value: anno.ctgrId,
            label: anno.ctgrName,
            index,
            disabled: !this.enableEdit,
          };
          return obj;
        });
      return arr.map((item) => {
        if (this.annoRelations[item.value]) {
          let tmp = [];
          this.annoRelations[item.value].forEach((rel) => {
            tmp = tmp.concat(
              this.validAnnoMap[rel.objectId].text.map((anno) => {
                let location = anno.segmentId;
                if (anno.rowIndex) { location += `/${anno.rowIndex}`; }
                if (anno.columnIndex) { location += `/${anno.columnIndex}`; }
                return {
                  value: `(${location},${anno.position.join(',')}):${rel.objectId}:${rel.relId}`,
                  label: anno.text,
                  relName: rel.relName,
                  relId: rel.relId,
                  disabled: !this.enableEdit,
                };
              }),
            );
          });
          item.children = tmp.map((node, index) => {
            node.index = index;
            return node;
          });
        }
        return item;
      });
    },
    selectedCascaderAnno() {
      return this.getCascaderAnno(this.panelValue);
    },
  },
  watch: {
    parserData() {
      this.processAnnotations();
    },
    annotations() {
      this.processAnnotations();
    },
    panelValue(val, oldVal) {
      if (this.panelInit) {
        // @:首次展示面板时不触发更新
        this.panelInit = false;
      } else {
        this.handleChange(val, oldVal);
      }
    },
    errorPos(val) {
      this.validErrorPos = val;
    },
    cascaderStr() {
      this.debounceRenderAnnoTypeArr();
    },
  },
  created() {
    this.initEvents();
  },
  mounted() {
    this.processAnnotations();
  },
  methods: {
    processAnnotations() {
      const groups = [];
      const groupMap = {};
      []
        .concat(this.annotations, this.parserData)
        .filter(item => item.segmentId === this.id)
        .sort((a, b) => a.startOffset - b.startOffset) // @:按照起始位置排序
        .forEach((anno) => {
          if (anno.note) {
            const point = groups.length - 1;
            if (!groups.length) {
              groups.push({
                start: anno.startOffset,
                end: anno.endOffset,
              });
              groupMap[0] = [anno];
              return;
            }

            if (anno.startOffset < groups[point].end + 1) {
              groups[point].end = Math.max(groups[point].end, anno.endOffset);
              groupMap[point].push(anno);
            } else {
              groups.push({
                start: anno.startOffset,
                end: anno.endOffset,
              });
              groupMap[point + 1] = [anno];
            }
          }
        });
      this.groups = groups;
      this.groupMap = groupMap;
    },
    initEvents() {
      this.setPageEvents([
        {
          name: 'SHOW_ANNO_PANEL', // @:展开已有标签的panel
          fn: ({
            segmentId, ev, note, text,
          }) => {
            if (this.id === segmentId) {
              this.clearAnnoPanelState();
              const cascaderContainer = this.$refs['cascader-container'];
              // let cascader = this.$refs["ctgr-cascader"];
              // let scrollTop = this.$el.parentElement.scrollTop;
              // const { offsetTop } = this.$el;

              const currTop = (ev.target.getBoundingClientRect().top
                - this.$el.parentElement.getBoundingClientRect().top)
                + 28;
              // + (this.version === 'simple' ? 0 : 52);
              const currLeft = (
                ev.target.parentElement.parentElement.firstChild.getBoundingClientRect().left
                - this.$el.getBoundingClientRect().left)
                + 20;
              cascaderContainer.style.top = `${currTop}px`;
              cascaderContainer.style.left = `${currLeft}px`;

              const panelArr = [];
              note.note.forEach((currentNote) => {
                const relArr = [];
                this.relations.forEach((subject) => {
                  if (
                    subject.ctgrId === currentNote.ctgrId
                    && subject.startOffset === note.startOffset
                    && subject.endOffset === note.endOffset
                  ) {
                    relArr.push(subject);
                  }
                });

                panelArr.push([currentNote.ctgrId]);
                if (relArr && relArr.length) {
                  relArr.forEach((rel) => {
                    let location = rel.relation.to.segmentId;
                    if (rel.relation.to.rowIndex
                      ) { location += `/${rel.relation.to.rowIndex}`; }
                    if (rel.relation.to.columnIndex
                      ) { location += `/${rel.relation.to.columnIndex}`; }
                    panelArr.push([
                      currentNote.ctgrId,
                      `(${location},${rel.relation.to.startOffset},${rel.relation.to.endOffset}):${rel.relation.to.ctgrId}:${rel.relation.relId}`,
                    ]);
                  });
                }
              });
              this.panelInit = true;
              this.panelValue = panelArr;

              this.currentAnno = {
                startOffset: note.startOffset,
                endOffset: note.endOffset,
                text,
                segmentId: note.segmentId,
              };
              if (note.rowIndex) { this.currentAnno.rowIndex = note.rowIndex; }
              if (note.columnIndex) { this.currentAnno.columnIndex = note.columnIndex; }
              this.$nextTick(() => {
                this.showPanel = true;
                this.fixCascaderPos(
                  currTop,
                  currLeft,
                  cascaderContainer,
                  -8,
                  ev.target.offsetWidth + 10,
                );
              });
            } else {
              this.hideAnnoPanel();
            }
          },
        },
        {
          name: 'HIDE_ANNO_PANEL',
          fn: () => {
            this.hideAnnoPanel();
          },
        },
        { name: 'ANNO_TEXT_SELECT', fn: this.handleSelect },
      ]);
    },
    getCascaderAnno(array) {
      return array
        .filter(item => item.length === 1)
        .map(arr => arr[0]);
    },
    hideAnnoPanel() {
      if (this.showPanel) {
        this.showPanel = false;
        this.currentAnno = null;
        this.panelValue = [];
        this.clearAnnoPanelState();
      }
    },
    clearAnnoPanelState() {
      // 重置面板的展开状态
      const cascader = this.$refs['ctgr-cascader'];
      this.$refs['ctgr-cascader'].$children.forEach((item) => {
        item.panel.activePath = [];
      });

      cascader.activePath = [];
      cascader.checkedValue = []; // required to work out
      cascader.syncMenuState(); // required to work out
    },
    handleSelect({ ev, segmentId }) {
      if (segmentId !== this.id) return;

      // @:禁止编辑
      if (!this.enableEdit) return;
      if (!this.annoTypes || !Object.keys(this.annoTypes).length) return;

      this.setSelectedData({});

      // @:获取selected信息
      let selected = null;
      let txt = '';
      if (document.selection) {
        selected = ev.target.ownerDocument.selection;
        txt = selected.createRange().text;
      } else {
        selected = ev.target.ownerDocument.getSelection();
        txt = selected.toString();
      }

      // @:没有选择任何文本时,不处理; 否则,阻止事件冒泡以免hideAnnoPanel被触发
      if (!txt.length) {
        return;
      }
      ev.stopPropagation();
      ev.stopImmediatePropagation();

      const startNode = selected.anchorNode || selected.baseNode;
      const endNode = selected.focusNode || selected.extentNode;
      const startOffset = selected.anchorOffset || selected.baseOffset;
      const endOffset = selected.focusOffset || selected.extentOffset;
      const startTextOffset = this.getTextOffset(startNode, startOffset);
      const endTextOffset = this.getTextOffset(endNode, endOffset);

      // @:计算位置和文本
      let startIndex = startTextOffset + 1;
      let endIndex = endTextOffset;
      if (startIndex > endIndex) {
        const tmp = endIndex;
        endIndex = startIndex - 1;
        startIndex = tmp + 1;
      }

      // @:若起始node和结束node不属于同一个segment, 则最后一个segment全选
      const startSegmt = getParentsByClassName.call(startNode, 'annotator-container');
      const endSegmt = getParentsByClassName.call(endNode, 'annotator-container');
      if (startSegmt !== endSegmt) {
        startIndex = 1;
      }

      const selectedText = this.text.slice(startIndex - 1, endIndex);
      this.setSelectedData({
        selected,
        startIndex,
        endIndex,
        selectedText,
      });

      // @:选择已有标签, 触发group中item.show(), 显示下拉菜单
      const index = this.annoPositions.indexOf(`${startIndex},${endIndex}`);
      if (index !== -1) {
        const groupIndex = this.groups.findIndex(
          item => item.start <= startIndex - 0 && item.end >= endIndex - 0,
        );
        this.$eventHub.$emit('SHOW_GROUP_PANEL', {
          segmentId,
          groupIndex,
          startIndex,
          endIndex,
        });
        return;
      }

      // @:在选中位置显示标注菜单
      this.clearAnnoPanelState();
      const cascaderContainer = this.$refs['cascader-container'];
      // let scrollTop = this.$el.parentElement.scrollTop;
      const currTop = ev.layerY + 28;
      const currLeft = ev.layerX;
      cascaderContainer.style.top = `${currTop}px`;
      cascaderContainer.style.left = `${currLeft}px`;

      this.panelInit = true;
      this.panelValue = [];
      this.currentAnno = {
        startOffset: startIndex,
        endOffset: endIndex,
        text: selectedText,
        segmentId,
      };
      this.showPanel = true;
      this.fixCascaderPos(currTop, currLeft, cascaderContainer);
    },
    fixCascaderPos(
      currTop,
      currLeft,
      cascaderContainer,
      offsetTop = -14,
      offsetLeft = 10,
    ) {
      const cascaderHeight = cascaderContainer.clientHeight;
      const bottom = cascaderContainer.parentElement.parentElement.offsetHeight
        - currTop
        - cascaderHeight;
      if (bottom < 0) {
        const fixTop = (currTop - cascaderHeight) + offsetTop;
        // eslint-disable-next-line no-param-reassign
        currTop = fixTop > 0 ? fixTop : 0;
        // eslint-disable-next-line no-param-reassign
        currLeft += offsetLeft;
      }
      cascaderContainer.style.top = `${currTop}px`;
      cascaderContainer.style.left = `${currLeft}px`;
    },
    setSelectedData({
      selected, startIndex, endIndex, selectedText,
    }) {
      this.selection = selected || null;
      this.selectedStartOffset = startIndex || 0;
      this.selectedEndOffset = endIndex || 0;
      this.selectedText = selectedText || '';
    },
    getTextOffset(currentNode, textOffset) {
      let index = 0;
      const parentClassList = currentNode.parentNode.classList;
      const containerNode = this.getParentContentNode(currentNode);
      if (!parentClassList.contains('content-text')) {
        const selectEmptyTextBefore = currentNode.previousSibling
          && currentNode.previousSibling.classList.contains('before-txt');
        const selectEmptyTextAfter = currentNode.previousSibling
          && currentNode.previousSibling.classList.contains('annoType-dropdown');
        if (
          parentClassList.contains('anno-text')
          || parentClassList.contains('after-txt')
          || selectEmptyTextBefore
        ) {
          const beforeNode = containerNode.getElementsByClassName(
            'before-txt',
          )[0];
          if (beforeNode instanceof Node) { index += beforeNode.textContent.length; }
        }
        if (parentClassList.contains('after-txt') || selectEmptyTextAfter) {
          const textNode = containerNode.getElementsByClassName('anno-text')[0];
          if (textNode instanceof Node) { index += textNode.textContent.length; }
        }

        // @:选中标签之间的空白时, 校正textOffset
        if (selectEmptyTextBefore || selectEmptyTextAfter) {
          if (currentNode.nodeType === 3
            // eslint-disable-next-line no-param-reassign
            && !currentNode.textContent.trim().length) { textOffset = 0; }
        }
      }
      const previousSiblings = getPreviousSiblings(containerNode);
      previousSiblings.forEach((node) => {
        if (node.nodeType === 3) {
          // @:text
          index += node.length;
        } else if (node.classList.contains('anno-group')) {
          // @:div.anno-group
          const textNode = node.getElementsByClassName('anno-text')[0];
          const beforeNode = node.getElementsByClassName('before-txt')[0];
          const afterNode = node.getElementsByClassName('after-txt')[0];
          if (beforeNode instanceof Node) { index += beforeNode.textContent.length; }
          if (textNode instanceof Node) { index += textNode.textContent.length; }
          if (afterNode instanceof Node) { index += afterNode.textContent.length; }
        }
      });
      return index + textOffset;
    },
    getParentContentNode(currNode) {
      while (!currNode.parentNode.classList.contains('content-text')) {
        // eslint-disable-next-line no-param-reassign
        currNode = currNode.parentNode;
      }
      return currNode;
    },
    handleChange(val, oldVal) {
      let relArr = [];
      let continueFlag = true;

      for (let i = 0; i < val.length; i++) {
        const item = val[i];
        if (item.length === 2) {
          const relVal = item[1].split(':');
          const fromCtgr = item[0];
          const toCtgr = relVal[1];
          // @:未选中信息抽取时直接选中对应的关系时, 自动选中信息抽取的信息; 修改后之后再触发后续的handleChange逻辑(本次不触发)
          if (this.selectedCascaderAnno.indexOf(fromCtgr) === -1) {
            if (this.getCascaderAnno(oldVal).indexOf(fromCtgr) !== -1) {
              // @: 删除信息抽取时, 一并删除信息抽取下所有对应的关系
              const indexArr = val
                .filter((j, index) => {
                  j.index = index;
                  return (
                    j.length === 2
                    && this.selectedCascaderAnno.indexOf(j[0]) === -1
                    && this.getCascaderAnno(oldVal).indexOf(fromCtgr) !== -1
                  );
                })
                .map(anno => anno.index)
                .sort((a, b) => b - a);
              const tmp = [].concat(val);
              indexArr.forEach((num) => {
                tmp.splice(num, 1);
              });
              this.panelValue = tmp;
            } else {
              // @: 新增关系时,自动勾选关系对应的信息抽取
              this.panelValue.push([fromCtgr]);
            }

            continueFlag = false;
            break;
          }

          if (
            this.selectedCascaderAnno.indexOf(toCtgr) === -1
            && this.getCascaderAnno(oldVal).indexOf(toCtgr) !== -1
          ) {
            // @: 删除信息抽取时, 一并删除信息抽取下所有对应的关系
            const indexArr = val
              .filter((j, index) => {
                j.index = index;
                return (
                  j.length === 2
                  && this.selectedCascaderAnno.indexOf(j[1].split(':')[1]) === -1
                  && this.getCascaderAnno(oldVal).indexOf(toCtgr) !== -1
                );
              })
              .map(anno => anno.index)
              .sort((a, b) => b - a);
            const tmp = [].concat(val);
            indexArr.forEach((num) => {
              tmp.splice(num, 1);
            });
            this.panelValue = tmp;

            continueFlag = false;
            break;
          }

          const tmp = item[1].split(':');
          const pos = tmp[0].match(/^\((.+)\)$/)[1].split(',');
          const location = pos[0].split('/');
          const segmentId = location[0];
          const rowIndex = location[1] || undefined;
          const columnIndex = location[2] || undefined;
          const currCtgr = this.validAnnoMap[item[0]];
          const targetCtgr = this.validAnnoMap[tmp[1]];
          const obj = {
            ctgrId: currCtgr.ctgrId,
            ctgrName: currCtgr.ctgrName,
            color: currCtgr.color,
            ...this.currentAnno,
          };
          const targetNote = this.validAnnoMap[targetCtgr.ctgrId].text.find(
            note => (
              note.segmentId === segmentId
              && note.rowIndex === rowIndex
              && note.columnIndex === columnIndex
              && note.position.join(',') === `${pos[1]},${pos[2]}`
            ),
          );
          const data = {
            segmentId: segmentId - 0,
            startOffset: pos[1] - 0,
            endOffset: pos[2] - 0,
            text: targetNote.text,
            ctgrId: targetCtgr.ctgrId,
            ctgrName: targetCtgr.ctgrName,
            color: targetCtgr.color,
          };
          if (location[1]) { data.rowIndex = location[1] - 0; }
          if (location[2]) { data.columnIndex = location[2] - 0; }
          obj.relation = {
            relId: tmp[2],
            relName: this.relationMap[tmp[2]].relName,
            to: data,
          };
          relArr.push(obj);
        }
      }
      if (this.currentAnno) {
        relArr = relArr.concat(
          this.relations.filter((rel) => {
            if (
              rel.segmentId === this.currentAnno.segmentId
              && rel.startOffset === this.currentAnno.startOffset
              && rel.endOffset === this.currentAnno.endOffset
              && rel.rowIndex === this.currentAnno.rowIndex
              && rel.columnIndex === this.currentAnno.columnIndex
            ) {
              // @:所有起始与当前标注相同的, 返回false
              return false;
            } if (
              rel.relation.to.segmentId === this.currentAnno.segmentId
              && rel.relation.to.startOffset === this.currentAnno.startOffset
              && rel.relation.to.endOffset === this.currentAnno.endOffset
              && rel.relation.to.rowIndex === this.currentAnno.rowIndex
              && rel.relation.to.columnIndex === this.currentAnno.columnIndex
            ) {
              // @:结束位置为当前文本, 但关系所指向的标注类型已经被删除时, 返回false
              return val.map(item => item[0]).includes(rel.relation.to.ctgrId);
            }
            // @:所有起始和结束位置都与当前标注无关的, 返回true
            return true;
          }),
        );
      }
      if (this.$devEnv && continueFlag) {
        relArr.forEach((rel) => {
          console.log(
              `${rel.relation.relName}: ${rel.text}-${rel.relation.to.text}`,
            );
        });
      }
      if (continueFlag && this.currentAnno) {
        const params = {
          startOffset: this.currentAnno.startOffset,
          endOffset: this.currentAnno.endOffset,
          text: this.currentAnno.text,
          note: this.selectedCascaderAnno,
          relations: relArr,
          segmentId: this.currentAnno.segmentId,
          rowIndex: this.currentAnno.rowIndex,
          columnIndex: this.currentAnno.columnIndex,
        };
        this.$eventHub.$emit('UPDATE_ANNOTATION', params);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.cascader-container {
  position: absolute;
  z-index: 10;
}
.ctgr-cascader {
  background-color: #fff;
  /deep/ .el-cascader-menu__list {
    padding-top: 33px;
  }
  /deep/ .el-cascader-menu__wrap {
    height: auto;
    min-height: 204px;
    max-height: 50vh;
  }
  /deep/ .el-cascader-menu:first-of-type {
    .cascader-title-anno {
      position: relative;
      margin-top: 0;
    }
    .cascader-header-anno {
      position: absolute;
      // margin-top: -77px;
      margin-top: -33px;
      width: 100%;
      left: 0;

      input {
        width: calc(100% - 16px);
        margin: 8px;
      }
    }
    .el-cascader-menu__list {
      // padding-top: 77px;
      padding-top: 33px;
    }
  }
}
.cascader-title-anno {
  position: absolute;
  margin-top: -33px;
  width: 100%;
  left: 0;
  line-height: 32px;
  border-bottom: 1px solid #e9e9e9;
  font-size: 12px;
  color: #666;
  padding: 0 8px;
  font-weight: normal;
}
.cascader-title-rel {
  @extend .cascader-title-anno;
  line-height: 31px;
}
.cascader-object {
  font-size: 12px;
  color: #666;
  line-height: 12px;
  padding-top: 4px;
}
.cascader-rel {
  font-size: 12px;
  line-height: 12px;
  color: #999;
  padding-bottom: 4px;
}
.content-text {
  // font-size: 0;
  // line-height: 52.5px;
  white-space: pre-wrap;
  color: #666;
  font-size: 14px;
  line-height: 3.75em;
  font-weight: normal;
}
</style>
<style lang="scss">
// .content-text {
//   white-space: pre-wrap;
//   color: #666;
//   font-size: 14px;
//   line-height: 3.75em;
//   font-weight: normal;
// }
// .ctgr-dropdown {
//   position: absolute !important;
// }
// .anno-text-container .annoType-dropdown {
//   // line-height: 20px;
//   // height: 20px;
//   font-size: 0;
//   &:focus {
//     outline: none;
//   }
// }
.annoType-item {
  font-size: 0;
  i {
    color: #00a699;
    font-weight: bold;
    line-height: 36px;
    float: right;
    margin: 0 0 0 8px;
    font-size: 14px;
  }
  span {
    font-size: 14px;
  }
}
.item-tip {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 6px;
  margin-right: 6px;
}
</style>
