import AnnotationTxt from './AnnotationTxt';


<template v-for="seg in text">
  <annotation-txt
          v-if="seg.type==='text'"
          :key="seg.segmentId"
          :id="seg.segmentId"
          :enableEdit="enableEdit"
          :text="seg.text"
  />
</template>
<!--:annotations="annotations"-->
<!--:validAnnoMap="validAnnoMap"-->
<!--:parserData="validParserData"-->
<!--:errorPos="wordErrors[seg.segmentId]"-->
<!--:relations="relations"-->

text = [{
  type: ,
  segmentId: '4',
  enableEdit: true,
  text: '中国海洋石油集团有限公司',
  validAnnoMap: ,
}]

annotations = [

]




AnnotationTxt.vue

<template>
  <div class="annotator-container">
    <div class="content-text" @mouseup.self="handleSelect({ev:$event,segmentId:id})">
      <!--标注的文本-->
      <template v-if="groups.length">
        <template v-for="(currGroup, i) in groups">
          <template
                  v-if="i === 0 && text.slice(0, currGroup.start).length"
          >{{text.slice(0, currGroup.start)}}xxx</template>
          <anno-group
                  :segmentId="id"
                  :key="'group-' + i"
                  class="anno-group"
                  :group="currGroup"
                  :groupIndex="i"
                  :value="groupMap[i]"
                  :content="text.slice(currGroup.start, currGroup.end)"
                  :enableEdit="enableEdit"
                  :errorPos="validErrorPos"
          />
          <template
                  v-if="text.slice(currGroup.end,groups[i + 1]? groups[i + 1].start - 1: undefined).length"
          >{{text.slice(currGroup.end,groups[i + 1]? groups[i + 1].start - 1: undefined)}}xxx2</template>
        </template>
      </template>
      <template v-else>{{text}}xxx3</template>
    </div>
  </div>
</template>


groups = [{
  start: 6,
  end: 8
}]

text = '中国海洋石油集团有限公司'



AnnoGroup.vue

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
                :style="`background-color:${item.note[0]?(item.note[0].type!=='ner'?item.note[0].color:''):'initial'};`"
        ></em>
        <!--多个圆圈-->
        <em
                v-else
                class="tag-icon"
                :style="`background:conic-gradient(${item.note.map(n=>n.color).join(',')});`"
        ></em>
        <span v-for="(currNote,j) in item.note" :key="j" :style="i===showIndex?'':'max-width:0;'">
          {{currNote?currNote.ctgrName:''}}
        </span>
      </p>
    </div>
    <div v-if="groupData.length" class="anno-text-container" style="background: lightyellow">
      <strong
              v-if="groupData[showIndex]&&groupData[showIndex].note&&groupData[showIndex].note.length===1"
              :style="`background-color:${groupData[showIndex].note[0].color};`"
              class="anno-text"
              ref="anno-text"
              @mouseup.prevent.stop="showAnnoPanel($event,groupData[showIndex],taggedContent)"
      >www{{taggedContent}}www</strong>
    </div>
  </div>
</template>

// 可能有多个标签
groupData = [{
  note: [{
    color: '#FFD2D2',
    ctgrName: 'project_content_2_original',
    text: '集团',
  }],
  startOffset: 8,
  endOffset: 7,
}];

group: {
  start: 6,
  end: 8
}

taggedContent: '集团'

toggleTag(i) {
this.showIndex = i;
},

taggedContent() {
  const obj = this.groupData[this.showIndex];
  let str = '';
  if (obj && obj.note) {
  str = obj.note[0].text;
  }
  return str;
},
