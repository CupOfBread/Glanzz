<template>
  <div class="notice">
    <i class="fa fa-bookmark"
       aria-hidden="true"></i>
    项目仍然在建设中，由于后端尚未部署，故部分功能处于不可用状态。可点击下面的列表进行页面的预览。
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.notice {
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 40px;
  padding: 23px;
  border: 1px dashed #e6e6e6;
  color: #969696;
  position: relative;
  background: #fbfbfb;
  font-size: 15px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  i {
    padding-right: 10px;
  }
}
</style>
