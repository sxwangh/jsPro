<template>
  <div>
    <el-popover
      placement="top"
      width="320"
      v-model="isOnSelect"
      height="166"
      trigger="manual">
      <!--div详细显示pop内容-->
      <div class="pop-container">
        <template v-for="(item, i) in knowPopList">
        <div style="box-sizing: border-box;padding: 0 0 10px 0;" :key="i + 10000">
        <div class="title" :key="i">
        <span>[{{item.title}}]</span>
        <span class="detail_icon" v-if="!item.isDetail"
         @click="knowPopList[i].isDetail=true">
        详情》</span>
        <span class="detail_icon" v-if="item.isDetail"
        @click="knowPopList[i].isDetail=false">
        收起&nbsp;&nbsp;</span>
        </div>
        <div :class="item.isDetail?'page_detail':'page'" :title="item.text"
         :key="i + 1000">
        {{item.text}}
        </div>
        </div>
        </template>
      </div>
      <!--div详细显示pop内容-->
      <!--源码-->
        <div :class="value.role === 0?'chat-info-robot':'chat-info-user'"
            slot="reference"
             @mouseup="mouseup(value.chatInfo)"
             @mousedown="mousedown()" v-html="value.chatInfo"></div>
      <!--源码-->
    </el-popover>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Object,
      required: {},
    },
  },
  data() {
    return {
      isOnSelect: false,
      lastWord: '',
      knowPopList: [{ title: '常青树', text: 'aa常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树', isDetail: false },
        { title: '常青树', text: 'vv常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树常青树', isDetail: false }],
    };
  },
  methods: {
    close() {
      // this.$emit('closeDialog'); // to give value a false
    },
    // mousedown(e) {
    //   const distanceX = e.clientX - this.$refs.drag.offsetLeft;
    //   const distanceY = e.clientY - this.$refs.drag.offsetTop;
    //   document.onmousemove = (ev) => {
    //     this.$refs.drag.style.left = `${ev.clientX - distanceX}px`;
    //     this.$refs.drag.style.top = `${ev.clientY - distanceY}px`;
    //   };
    //   document.onmouseup = () => {
    //     document.onmousemove = null;
    //     document.onmouseup = null;
    //   };
    // },
    mouseup(info) { // 划词
      this.lastWord = info;
      let selectedText = window.getSelection().toString();
      this.search(selectedText); // 弹框数据获取
      if (selectedText !== '') {
        selectedText = `<span style="background:lightskyblue">${selectedText}</span>`;
        const start = window.getSelection().getRangeAt(0).startOffset;
        const end = window.getSelection().getRangeAt(0).endOffset;
        // const start = window.getSelection().startOffset
        // .surroundContents(document.createElement('span'));
        // const end = window.getSelection().endOffset
        // .surroundContents(document.createElement('span'));
        const tempStr1 = info.substring(0, start);
        const tempStr2 = info.substring(end);
        this.value.chatInfo = `${tempStr1}${selectedText}${tempStr2}`;
        this.isOnSelect = true;
        // if (this.$refs.drag) {
        //   this.$refs.drag.style.left = `${ev.clientX - 50}px`;
        //   this.$refs.drag.style.top = `${ev.clientY - 50}px`;
        // }
      }
    },
    mousedown() {
      if (this.isOnSelect) { // 划词结束时（及此时有画完词的红标签时）
        this.value.chatInfo = this.lastWord;
        this.isOnSelect = false;
      }
    },
    search(keyword) {
      const that = this;
      const data = { keyWord: keyword, userId: 'test_knowledge' };

      // 用于搜索的websocket
      const wsSearch = new WebSocket('ws://192.168.184.168:8081/knowledgeSearch/ID=xinhonghong');
      wsSearch.onopen = () => {
        wsSearch.send(JSON.stringify(data));
      };
      wsSearch.onmessage = (evt) => {
        that.knowPopList = JSON.parse(evt.data);
        wsSearch.close();
      };
      window.onunload = () => {
        if (wsSearch != null) {
          wsSearch.close();
        }
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/style/common";
  /*对话样式*/
  .chat-info-robot {
    //@include chat-info;
    border-radius: 7px;
    margin:5px 10px;
    box-sizing: border-box;
    padding:5px;
    align-items: center;
    background: #F3F3F3;
    border-radius: 0px 6px 6px 6px;
    color:#666666;
  }
  .chat-info-user {
    //@include chat-info;
    border-radius: 7px;
    margin:5px 10px;
    box-sizing: border-box;
    padding:5px;
    align-items: center;
    background-color:rgba(74,144,226,0.18);
    border-radius: 6px 1px 6px 6px;
    color:#145885;
  }
  /*详细pop样式*/
  .title {
    @include  content-font;
    cursor: pointer;
    .detail_icon {
      @include content-font-blue;
      float:right;
    }
  }
  .page {
    padding: 3px 0px;
    box-sizing: border-box;
    /*不换行省略号
      max-height: 40px;
      white-space: nowrap; 不换行
      text-overflow: ellipsis;*/
    /*----换行省略----*/
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 18px;
    /*font-weight: lighter;*/
  }
  .page_detail {
    padding: 3px 0px;
    box-sizing: border-box;

    max-height: fit-content;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 18px;
    /*font-weight: lighter;*/
  }
  .dialog-div{
    box-sizing: border-box;
    height:360px;
    overflow: hidden;;
    padding:10px 15px 15px 15px;
    font-size: 14px;
    color:#333333;
    /*font-weight: lighter;*/
  }
  .pop-container {
    box-sizing: border-box;
    padding: 0px 15px 15px 5px;
    margin: 15px 0px 0px 0px;
    overflow: auto !important;
    width: 100%;
    height:160px;
    overflow: auto;
  }
  .pop-container::-webkit-scrollbar {
    @include -webkit-scrollbar();
  }
  .pop-container::-webkit-scrollbar-thumb {
    @include -webkit-scrollbar-thumb();
  }
  .pop-container::-webkit-scrollbar-track {
    @include -webkit-scrollbar-track();
  }
</style>
