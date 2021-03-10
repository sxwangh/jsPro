<template>
  <div class="dr--dialog__wrapper" v-if="value===true"
        ref="dragDiv">
    <div class="dr--dialog">
      <div class="dr--dialog__header">
        <span class="dr--dialog__title">{{title}}</span>
        <button class="dr--dialog__headerbtn" @click="close()" v-if="isCloseBtn">
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
    isCloseBtn: {
      type: Boolean,
      required: false,
      default() {
        return true;
      },
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
  },
};
</script>

<style lang="scss" scoped>
.dr--dialog__wrapper {
    background: unset;
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
    background: rgba(0,0,0,0.40);
    z-index: 10;

  .dr--dialog{
    /*margin-top: 15vh;*/
    width: 385px;
    /*width: 380px;*/
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.30);
    border-radius: 8px;
    top:150px;


    .dr--dialog__header {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0;
      background-color: white;
      border-radius: 8px 8px 0 0;
      .dr--dialog__title{
        font-size:16px;
        font-weight:500;
        color:rgba(51,51,51,1);
        display: inline-block;
        padding: 20px 0 0 20px;
      }
      .dr--dialog__headerbtn {
        position: absolute;
        top: 6px;
        right: 10px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        background: url("../assets/icon/tag-Delete-icon.png") no-repeat center center;
        background-size: 18px 18px;
        width: 30px;
        height:30px;
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
      padding: 10px 5px;
    }
  }
}
</style>
