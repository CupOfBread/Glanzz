<template>
  <footer>
    <p>面包房小黑屋 © 2021 版权所有</p>
    <p>本站所有未标“转载”字样的文章均为原创 | 如有转载，请注明出处</p>
    <p class="foo-logo"></p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
  font-size: 13px;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 22px;
  line-height: 26px;
  color: rgb(117, 117, 117);
  .foo-logo {
    background: url('~@/assets/img/f-logo.png');
    width: 24px;
    height: 24px;
    opacity: 0.3;
    margin: 0 auto;
    margin-top: 10px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    animation: poi-deg 12s infinite linear;
    -webkit-animation: poi-deg 12s infinite linear;
  }
  @keyframes poi-deg {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
