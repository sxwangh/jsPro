<template>
  <div class="anno-group">
    <div class="anno-flag" ref="anno-flag">
      <!-- 用于计算anno-bar的位置 -->
    </div>
    <div v-show="showAnnoBar" class="anno-bar" ref="anno-bar">
      <p class="anno-tag" v-for="(item,i) in groupData" :key="i" @mouseover="toggleTag(i)" style="background: lightblue">
        <em
          v-if="item.note.length===1"
          class="tag-icon"
          :class="{'ner-tag':item.note[0]&&item.note[0].type==='ner'}"
          :style="`background-color:${item.note[0]?(item.note[0].type!=='ner'?item.note[0].color:''):'initial'};`"
        ></em>
        <em
          v-else
          class="tag-icon"
          :style="`background:conic-gradient(${item.note.map(n=>n.color).join(',')});`"
        ></em>
        <span v-for="(currNote,j) in item.note" :key="j" :style="i===showIndex?'':'max-width:0;'">
          {{currNote?currNote.ctgrName:''}}
          <i
            class="el-icon-close"
            v-if="enableEdit&&!(currNote&&currNote.type==='ner')"
            @click="removeAnno(item.index,j,currNote)"
          ></i>
        </span>
      </p>
    </div>
    <div v-if="groupData.length" class="anno-text-container" style="background: lightyellow">
      <span class="before-txt" v-if="beforeContent.length">{{beforeContent}}</span>
      <template v-else></template>
      <!-- <el-dropdown
        ref="dropdown"
        class="annoType-dropdown"
        trigger="click"
        placement="bottom-start"
        @command="handleCommand($event,showIndex)"
      >
        <strong
          v-if="groupData[showIndex]&&groupData[showIndex].note&&groupData[showIndex].note.length===1"
          :style="`background-color:${groupData[showIndex].note[0].type!=='ner'?groupData[showIndex].note[0].color:''};`"
          :class="[groupData[showIndex].note[0].type==='ner'?'ner-text':'',errorPos.includes(`${groupData[showIndex].startOffset}-${groupData[showIndex].endOffset}`)?'has-error':'']"
          class="anno-text el-dropdown-link"
        >{{taggedContent}}</strong>
        <strong
          v-else
          :style="`background:linear-gradient(90deg,${groupData[showIndex].note.map(n=>n.color).join(',')});`"
          :class="errorPos.includes(`${groupData[showIndex].startOffset}-${groupData[showIndex].endOffset}`)?'has-error':''"
          class="anno-text el-dropdown-link"
        >{{taggedContent}}</strong>
        <el-dropdown-menu v-if="Object.values(annoTypes).length" slot="dropdown">
          <el-dropdown-item
            v-for="anno in annoTypes"
            :key="anno.ctgrId"
            :command="anno.ctgrId"
            class="annoType-item"
            :disabled="!enableEdit"
          >
            <em class="item-tip" :style="`background-color:${anno.color};`"></em>
            <span>{{anno.ctgrName}}</span>
            <i class="el-icon-check" v-show="anno.ctgrId===groupData[showIndex].note.ctgrId"></i>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>-->
      <strong
        v-if="groupData[showIndex]&&groupData[showIndex].note&&groupData[showIndex].note.length===1"
        :style="`background-color:${groupData[showIndex].note[0].type!=='ner'?groupData[showIndex].note[0].color:''};`"
        :class="[groupData[showIndex].note[0].type==='ner'?'ner-text':'',(errorPos||[]).includes(`${groupData[showIndex].startOffset}-${groupData[showIndex].endOffset}`)?'has-error':'']"
        class="anno-text"
        ref="anno-text"
        @mouseup.prevent.stop="showAnnoPanel($event,groupData[showIndex],taggedContent)"
      >{{taggedContent}}</strong>
      <strong
        v-else
        :style="`background:linear-gradient(90deg,${groupData[showIndex].note.map(n=>n.color).join(',')});`"
        :class="(errorPos||[]).includes(`${groupData[showIndex].startOffset}-${groupData[showIndex].endOffset}`)?'has-error':''"
        class="anno-text"
        ref="anno-text"
        @mouseup.prevent.stop="showAnnoPanel($event,groupData[showIndex],taggedContent)"
      >{{taggedContent}}</strong>
      <span class="after-txt" v-if="afterContent.length">{{afterContent}}</span>
      <template v-else></template>
    </div>
    <template v-else></template>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  props: {
    segmentId: [String, Number],
    column: [Number],
    row: [Number],
    group: [Object],
    groupIndex: [Number],
    value: [Array],
    content: [String],
    enableEdit: [Boolean],
    errorPos: [Array],
  },
  data() {
    return {
      groupData: [],
      showIndex: -1, // @:在groupData中的index
      showAnnoBar: true,
    };
  },
  computed: {
    ...mapState(['annoTypes']),
    indexMap() {
      // 从annotations中的index映射到groupData中的index
      const obj = {};
      this.groupData.map((item, i) => {
        obj[item.index] = i;
        return item;
      });
      return obj;
    },
    beforeContent() {
      const obj = this.groupData[this.showIndex];
      let str = '';
      if (obj && obj.note) {
        const start = obj.startOffset - this.group.start;
        str = this.content.slice(0, start);
      } else {
        str = this.content;
      }
      return str;
    },
    taggedContent() {
      const obj = this.groupData[this.showIndex];
      let str = '';
      if (obj && obj.note) {
        const start = obj.startOffset - this.group.start;
        const end = (obj.endOffset - this.group.start) + 1;
        str = this.content.slice(start, end);
      }
      return str;
    },
    afterContent() {
      const obj = this.groupData[this.showIndex];
      let str = '';
      if (obj && obj.note) {
        const end = (obj.endOffset - this.group.start) + 1;
        str = this.content.slice(end);
      }
      return str;
    },
    textArr() {
      return this.groupData.map(item => (item.note && item.note.length ? item.note[0].text : null));
    },
  },
  watch: {
    value(val) {
      this.groupData = this.processData(val);
      this.showIndex = this.groupData.length - 1;
      this.$nextTick(() => {
        this.setAnnoBarPos();
      });
    },
    // groupData(val) {
    //   console.warn("groupData changed...");
    //   // this.$emit("input", val);
    // }
  },
  created() {
    this.initEvents();
    window.addEventListener('resize', this.setAnnoBarPos);
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setAnnoBarPos);
  },
  methods: {
    init() {
      this.groupData = this.processData(this.value);
      this.showIndex = this.groupData.length - 1;
      this.$nextTick(() => {
        this.setAnnoBarPos();
      });
    },
    initEvents() {
      this.setPageEvents([
        {
          name: 'SHOW_GROUP_PANEL', //  @:更新anno-group中的showIndex, 再触发对应标签的mouseup事件
          fn: ({
            segmentId,
            groupIndex,
            startIndex,
            endIndex,
          }) => {
            if (this.segmentId === segmentId && this.groupIndex === groupIndex) {
              const index = this.groupData.findIndex(
                item => item.startOffset === startIndex && item.endOffset === endIndex,
              );
              if (index !== -1) { this.showIndex = index; }
              this.$nextTick(() => {
                const el = this.$refs['anno-text'];
                const event = document.createEvent('MouseEvents');
                event.initMouseEvent(
                  'mouseup',
                  true,
                  true,
                  document.defaultView,
                );
                el.dispatchEvent(event);
              });
            }
          },
        },
        {
          name: 'ANNO_CONTENT_SCROLL_START',
          fn: () => {
            this.showAnnoBar = false;
          },
        },
        {
          name: 'ANNO_CONTENT_SCROLL_END',
          fn: () => {
            this.showAnnoBar = true;
            this.setAnnoBarPos();
          },
        },
        {
          name: 'UPDATE_ANNOTATION_SUCCEED',
          fn: () => {
            this.$nextTick(() => {
              this.setAnnoBarPos();
            });
          },
        },
        {
          name: 'DELETE_ANNOTATION_SUCCEED',
          fn: () => {
            this.$nextTick(() => {
              this.setAnnoBarPos();
            });
          },
        },
        {
          name: 'DELETE_ANNOTATION_GROUP_SUCCEED',
          fn: () => {
            this.$nextTick(() => {
              this.setAnnoBarPos();
            });
          },
        },
        {
          name: 'TOGGLE_PARSER',
          fn: () => {
            this.$nextTick(() => {
              this.setAnnoBarPos();
            });
          },
        },
      ]);
    },
    processData(val) {
      const arr = val
        .filter(item => item.note && item.note.length)
        .sort((a, b) => {
          let latestA = this.getLatestNote(a.note).createTime;
          let latestB = this.getLatestNote(b.note).createTime;

          // @:NER没有人createTime, 最后显示
          if (!latestA) { latestA = -1; }
          if (!latestB) { latestB = -1; }

          return new Date(latestA) - new Date(latestB);
        });
      return arr;
    },
    getLatestNote(arr) {
      return arr.reduce((acc, a) => {
        if (acc && acc.createTime) {
          return new Date(acc.createTime) - new Date(a.createTime) >= 0
            ? acc
            : a;
        }
        return a;
      }, null);
    },
    toggleTag(i) {
      this.showIndex = i;
    },
    setAnnoBarPos() {
      const el = this.$refs['anno-text'];

      if (el) {
        const elBar = this.$refs['anno-bar'];
        const flagRect = this.$refs['anno-flag'].getBoundingClientRect();
        if (
          this.$el.parentElement.getBoundingClientRect().right
          - flagRect.right
          < 14
        ) {
          // @: 当anno-flag出现在行尾时, anno-bar展示在下一行的行首
          elBar.style['margin-left'] = '1px';
          elBar.style['margin-top'] = `${-this.$el.parentElement.parentElement.parentElement.scrollTop + 2}px`;
        } else {
          elBar.style['margin-left'] = `${(flagRect.left
            // - this.$el.parentElement.parentElement.getBoundingClientRect().left
            - this.$el.parentElement.parentElement.getBoundingClientRect().left)
            + 1}px`;
          elBar.style['margin-top'] = `${-this.$el.parentElement.parentElement.parentElement.scrollTop
            - 50}px`;
        }
      }
    },
    removeAnno(index, innerIndex, note) {
      // @:禁止编辑
      if (!this.enableEdit) return;

      if (note && note.type !== 'ner') {
        this.$eventHub.$emit('DELETE_ANNOTATION', {
          annoIndex: index,
          noteIndex: innerIndex,
        });
      } else {
        // @:解析器
        console.log('delete parser item');
      }
    },
    showAnnoPanel(ev, note, text) {
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

      const index = txt ? this.textArr.indexOf(txt) : -1;
      if (!txt || index !== -1) {
        if (index !== -1) { this.showIndex = index; }
        this.$eventHub.$emit('SHOW_ANNO_PANEL', {
          segmentId: this.segmentId,
          ev,
          note: this.groupData[index] || note,
          text: txt || text,
        });
      } else {
        this.$eventHub.$emit('ANNO_TEXT_SELECT', {
          ev,
          segmentId: this.segmentId,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.anno-group {
  // position: relative;
  display: inline;
  font-size: 0;
  line-height: 20px;
}
.anno-text-container {
  display: inline;
  font-size: 0;
  span,
  strong {
    font-size: 14px;
  }
  strong {
    border-radius: 2px;
    cursor: pointer;
    line-height: 2em;
    display: inline;
    &.has-error {
      border-bottom: 3px dashed red;
      border-image: url("../../assets/images/wave-bold.png") 0 0 70 repeat;
    }
  }
  // .annoType-dropdown {
  //   display: inline;
  // }
}
.anno-bar {
  @extend %no-select;
  position: absolute;
  font-size: 0;
  line-height: 1em;
  white-space: nowrap;
  margin-top: -50px;
  z-index: 2;
  color: #888;
  background: #fff;
  &:hover {
    color: #666;
    z-index: 3;
  }
}
.anno-flag {
  width: 0;
  height: 0;
  display: inline-block;
}
.anno-tag {
  @extend %no-select;
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding-left: 12px;
  & + .anno-tag {
    margin-left: 4px;
  }
  span {
    display: inline-block;
    overflow: hidden;
    font-size: 10px;
    height: 12px;
    line-height: 12px;
    vertical-align: -1px;
    max-width: 100vw;
    // transition: max-width 0.1s;
  }
  i {
    color: #bbb;
    &:hover {
      color: #666;
    }
    margin: 0 4px 0 -3px;
  }
}
.tag-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin-right: 2px;
  position: absolute;
  margin-left: -12px;
  border: 1px solid transparent;
  &.ner-tag {
    border-color: #1875f0;
  }
}
.anno-text {
  &.ner-text {
    color: #1875f0;
  }
  &:focus {
    outline: none;
  }
}
</style>
