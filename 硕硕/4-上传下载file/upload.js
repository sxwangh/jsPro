
上传
<el-button type="success" @click="clickUploadTextButton()" class="button">{{$t('text_upload')}}</el-button><!—上传文本—>
<input type="file" @change="changeInputText($event)" ref="text" style="display: none;"/>

clickUploadTextButton() {
  this.$refs.text.click();
},

// 上传文本
changeInputText(event) {
  const maxSize = 1048576; // 限制大小与后台同步
  const file = this.$refs.text.files[0]; // file对象继承了blob
  if (file.size > maxSize) {
    this.$message.error({ message: this.$t('upload_error_tip') }); // 上传文档不能超过200MB
    event.target.value = ''; // 避免上传相同文档不能触发事件
    return;
  }
  this.postText(file, file.name).then(() => {
    event.target.value = ''; // 避免上传相同文档不能触发事件
  });
},

// 上传文本axios
postText(file, fileName) {
  const formData = new FormData();
  formData.append('fileUpload', file, fileName);
  formData.append('agentId', this.agentId);
  formData.append('entId', this.entId);
  return axios({
    method: 'post',
    url: '/accept/file/upload',
    data: formData,
  })
    .then((response) => {
      if (response.data.code === 200) {
        this.textLoading = false;
        // this.alertMessage(`${fileName}:this.$t('text_upload_sc')`, 'success'); /* 文本助手文本上传成功 */
        this.$message({
          message: `${fileName}:${this.$t('text_upload_sc')}`,
          type: 'success',
          showClose: true,
        });
      } else {
        this.textLoading = false;
        this.$message({
          message: response.data.msg,
          type: 'error',
          showClose: true,
        });
      }
      console.log(response);
    }).catch((response) => {
      console.log(response);
      this.textLoading = false;
      // this.alertMessage(response.data.msg, 'error');
      this.$message({
        message: response.data.msg,
        type: 'error',
        showClose: true,
      });
    });
},
},
