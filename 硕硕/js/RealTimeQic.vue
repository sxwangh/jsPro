<template>
  <div id="real-time-qic">
    <div class="real-time-title">违规提醒</div>
    <div class="real-box">
      <ul class="qic-list" ref="scroll" v-if="realTimeList&& realTimeList.length>0">
        <li class="item-li" v-for="(item, index) in realTimeList" :key="index">
          <span class="item-title">{{ item.date }}</span>
          <!-- <span class="item-title">00:00:12</span> -->
          <span class="item-content">{{ item.content }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from '../lib/Bus';

export default {
  name: 'real-time-qic',
  data() {
    return {
      canScroll: false,
      lastScrollNode: 0,
      ws: null,
      realTimeList: [],
      emotionWsUrl: '',
    };
  },
  methods: {
    /** 滚动置顶 */
    scrollBottom() {
      this.$refs.scroll.childNodes[this.childNodes].scrollIntoView();
    },
    /** parseVoiceData */
    parseVoiceData(data) {
      if (data) {
        if (data.warnInfos) {
          this.realTimeList = [...this.realTimeList, ...data.warnInfos];
          if (this.realTimeList.length > 3) {
            this.$nextTick(() => {
              this.childNodes = this.realTimeList.length - 1;
              this.scrollBottom();
            });
          }
        }
      }
    },
    /** parseVoiceData */
    // parseTextData(data) {
    //   if (data) {
    //     if (data.warnInfos) {
    //       this.realTimeList = [...this.realTimeList, ...data.warnInfos];
    //     }
    //     if (this.realTimeList.length > 3) {
    //       this.scrollBottom();
    //     }
    //   }
    // },
  },
  created() {

  },
  mounted() {
    // const that = this;
    bus.$on('realTimeQIC', (data) => {
      this.parseVoiceData(data.data);
      // if (data.type === 'voice') {
      //   this.parseVoiceData(data.data);
      // } else if (data.type === 'text') {
      //   this.parseTextData(data.data);
      // }
    });
  },

};
</script>

<style lang="scss" scoped>
@import "../assets/style/common";
*{
  margin:0;
  padding:0;
}
#real-time-qic{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-size: 14px;

  .real-time-title{
    font-size:16px;
    color:#333;
    line-height: 50px;
    // padding: 0 20px;
    width:calc(100% - 30px);
    padding-left: 5px;
    margin: 0 auto;
    border-bottom:1px solid #E9E9E9;
  }
  .real-box{
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100% - 50px);
    .qic-list{
      width: 100%;
      overflow-x: hidden;
      padding-left: 17px;
      box-sizing: border-box;
      .item-li{
        width:100%;
        line-height: 28px;
        display: flex;
        justify-content: flex-start;
        color:#666;
        .item-title{
          flex:0 0 80px;
          color:#999;
        }
        .item-content{
          color:#666;
        }
      }
    }
  }
}

.real-box::-webkit-scrollbar{
  @include -webkit-scrollbar();
}

.real-box::-webkit-scrollbar-thumb{
  @include -webkit-scrollbar-thumb();
}
.real-box::-webkit-scrollbar-track{
  @include -webkit-scrollbar-track();
}
</style>
