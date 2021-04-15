<template>
  <div class="user-avatar animate__fadeInRight animate__animated">
    <a @click="open('/bs')">
      <img src="@/assets/img/none.png"
           width="30"
           height="30">
    </a>
    <div class="menu">
      <div class="no-logged">还未登录？
        <a @click="open('/bs')">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.user-avatar {
  position: relative;
  float: right;
  margin-top: 22px;
  img {
    border-radius: 100%;
    cursor: pointer;
    height: auto;
    max-width: 100%;
  }
  .menu {
    position: absolute;
    width: 130px;
    right: 0;
    text-align: left;
    background: none;
    padding-top: 20px;
    margin-top: -10px;
    display: none;
    overflow: hidden;
    animation: fade-in 0.4s;
    .no-logged {
      font-size: 13px;
      padding: 15px 10px;
      border-radius: 4px;
      border: 0;
      background-color: #f5f5f5;
      ::before {
        content: '';
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #f5f5f5;
        position: absolute;
        top: 10px;
        right: 5px;
      }
      a {
        display: initial;
        color: #69d2e7;
        font-size: 14px;
        padding: 0 5px;
        text-decoration: underline;
        &:hover {
          cursor: pointer;
        }
      }
    }
    a {
      display: block;
      padding: 6px 10px;
      margin: 2px 0;
      width: 100%;
      text-align: left;
      color: #333;
      font-size: 13px;
    }
  }
  &:hover .menu {
    display: block;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>