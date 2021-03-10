<template>
  <div class="dr--dialog__wrapper" v-if="value===true"
        ref="dragDiv">
    <div class="dr--dialog" @mousedown="mousedown($event)">
      <div class="dr--dialog__header">
        <span class="dr--dialog__title">{{title}}</span>
        <button class="dr--dialog__headerbtn" @click="close()">
        </button>
      </div>
      <div class="dr--dialog__body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: '提示',
    },
  },
  data() {
    return {
      keyword: '',
      isFocus: false,
    };
  },
  methods: {
    close() {
      this.$emit('closeDialog'); // to give value a false
    },
    mousedown(e) {
      if (e.target.className === 'dr--dialog__header') {
        const distanceX = e.clientX - this.$refs.dragDiv.offsetLeft;
        const distanceY = e.clientY - this.$refs.dragDiv.offsetTop;
        document.onmousemove = (ev) => {
          this.$refs.dragDiv.style.left = `${ev.clientX - distanceX}px`;
          this.$refs.dragDiv.style.top = `${ev.clientY - distanceY}px`;
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dr--dialog__wrapper {
    /*background: unset;*/
    border-radius: 2px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /*overflow: auto;*/
    overflow:hidden;
    margin: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

  .dr--dialog{
    width:480px;
    height:280px;
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    box-sizing: border-box;
    box-shadow:0px 2px 10px 0px rgba(0,0,0,0.2);
    border-radius: 8px;


    .dr--dialog__header {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0;
      border-radius: 8px 8px 0 0;
      padding:20px;
      box-sizing: border-box;
      .dr--dialog__title{
        color:#333333;
      }
      .dr--dialog__headerbtn {
        position: absolute;
        top: 21px;
        right: 21px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        background: url("../assets/icon/tag-Delete-grey.png") no-repeat center center;
        background-size: 16px 16px;
        width: 16px;
        height:16px;
        &:hover {
          opacity: 0.7;
        }
      }
      /*.dr--icon-close {*/

      /*}*/
      /*.dr--dialog__headerbtn .dr--dialog__close {*/
        /*color: #909399;*/
      /*}*/
      /*.dr--icon-close:before {*/
        /*content: "\E60F";*/
      /*}*/
    }
    .dr--dialog__body {
      box-sizing: border-box;
      background: #FFFFFF;
    }
  }
}
</style>
