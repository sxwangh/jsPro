<template>
  <div class="search-input">
    <input v-model="keyword"
           ref="input"
           :placeholder="placeholder"
           @keypress.enter="$emit('search', keyword)"
           @keyup="$emit('input', keyword)"
           @focus="toggleFocus"
           @blur="toggleFocus">
    <div class="input-icon"  @click="$emit('search', keyword)"></div>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
  },
  data() {
    return {
      keyword: '',
      isFocus: false,
    };
  },
  watch: {
    value() {
      this.keyword = this.value;
    },
  },
  methods: {
    toggleFocus() {
      this.isFocus = !this.isFocus;
    },
  },
  mounted() {
    this.keyword = this.value;
  },
};
</script>

<style lang="scss" scoped>

  $input-height: 28px;

  .search-input {
    display: inline-flex;
    flex-direction: row;
    height: 28px;

    box-sizing: border-box;
    padding: 3px 0px;
    width: 160px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    background: #fff;
    align-items: center;
    &:hover {
      border: 1px solid black;
    }
  }
  input {
    min-width: 100px;
    /*width: 130px;*/
    width: 90%;
    padding: 4px 8px;
    border: 0;
    outline: none;
    background: transparent;
  }

  /* workaround of focus-within of IE*/
  /*.ie-focus-within {*/
    /*outline: none;*/
    /*box-shadow: 0 0 0 2px rgba(75, 75, 100, 0.2);*/
    /*border-color: #4b4b64;*/
  /*}*/
  .input-icon {
    background: url("../assets/icon/search_icon.svg") no-repeat center center;
    background-size: 15px 15px;
    /*width: calc(100% - 142px);*/
    width: 10%;
    height: 28px;
    cursor: pointer;
    align-items: center;
    padding: 4px 8px;
    opacity: 0.5;
    &:hover {
      opacity: 1.2;
    }
  }
</style>
