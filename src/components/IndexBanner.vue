<template>
  <div class="banner"
       id="big-bg"
       :style="big_bg">
    <div class="grid"
         :style="big_bg">
    </div>
    <div class="site-info">
      <div class="logo animate__animated animate__rubberBand"><a href="https://lab.cupbread.cn"><img src="../assets/img/logo.png"></a></div>
      <div class="info animate__animated animate__rubberBand">
        <p>看似没有更新，实际上是我懒得写更新记录。</p>
      </div>
      <div class="social animate__animated animate__rubberBand">
        <li><a href="https://weibo.com/u/5232879316"
             target="_blank"
             class="social-sina"
             title="sina"><img src="../assets/icon/sina.png"></a></li>
        <li class="qq"><a href="//wpa.qq.com/msgrd?v=3&amp;uin=671547162&amp;site=qq&amp;menu=yes"
             target="_blank"
             title="Initiate chat ?"><img src="../assets/icon/qq.png"></a></li>
        <li><a href="https://github.com/CupOfBread"
             target="_blank"
             class="social-github"
             title="github"><img src="../assets/icon/github.png"></a></li>
        <li><a href="https://space.bilibili.com/3300215"
             target="_blank"
             class="social-bili"
             title="bilibili"><img src="../assets/icon/bilibili.png"></a></li>
        <li><a href="https://music.163.com/#/user/home?id=1490296399"
             target="_blank"
             class="social-wangyiyun"
             title="CloudMusic"><img src="../assets/icon/wangyiyun.png"></a></li>
      </div>
    </div>
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.big_bg.height = window.innerHeight + 'px'
  },
  data () {
    return {
      big_bg: {
        height: ''
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.banner {
  background-image: url('../assets/img/bg2.png');
  width: 100%;
  margin: 0;
  padding: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: -1;
  .grid {
    width: 100%;
    background-image: url('../assets/img/grid.png');
    z-index: 1;
    position: absolute;
  }
  .site-info {
    position: relative;
    max-width: 800px;
    padding: 0 10px;
    top: 49.3%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    text-align: center;
    z-index: 97 !important;
    -webkit-transition: 0.4s ease all;
    -moz-transition: 0.4s ease all;
    -o-transition: 0.4s ease all;
    transition: 0.4s ease all;
    .logo {
      img {
        width: 140px;
        height: 140px;
        box-shadow: inset 0 0 10px #000;
        padding: 5px;
        opacity: 1;
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transition: all ease 1s;
        -webkit-transition: all ease 1s;
        -moz-transition: all ease 1s;
        -o-transition: all ease 1s;
        border-radius: 100%;
      }
      img:hover {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
      }
    }
    .info {
      width: 60%;
      margin: auto;
      font-size: 16px;
      color: #eaeadf;
      background: rgba(0, 0, 0, 0.5);
      padding: 15px 25px;
      margin-top: 22px;
      font-family: miranafont, 'Hiragino Sans GB', STXihei, 'Microsoft YaHei',
        SimSun, sans-serif;
      letter-spacing: 0;
      line-height: 30px;
      border-radius: 50px;
    }
    .social {
      height: 32px;
      margin-top: 30px;
      margin-left: 10px;
      list-style: none;
      display: inline-block;
      font-family: miranafont, 'Hiragino Sans GB', STXihei, 'Microsoft YaHei',
        SimSun, sans-serif;
      li {
        float: left;
        margin-right: 10px;
        img {
          height: 26px;
          width: 26px;
          padding: 6px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100%;
        }
      }
    }
  }
  .waveWrapper {
    position: absolute;
    bottom: -1px;
    height: 219px;
    width: 100%;
    overflow: hidden;
    margin: auto;

    .waveMiddle {
      background-size: 50% 120px;
    }

    .waveBottom {
      background-size: 50% 100px;
    }
    .waveWrapperInner {
      position: absolute;
      width: 100%;
      overflow: hidden;
      height: 100%;
      bottom: -1px;
      background-image: linear-gradient(to top, 20%, 80%);
      .wave {
        position: absolute;
        left: 0;
        width: 200%;
        height: 100%;
        background-repeat: repeat no-repeat;
        background-position: 0 bottom;
        transform-origin: center bottom;
      }
    }
    .bgTop {
      z-index: 15;
      opacity: 0.3;
    }

    .bgMiddle {
      z-index: 10;
      opacity: 0.5;
    }

    .bgBottom {
      z-index: 5;
      opacity: 0.7;
    }
    .waveTop {
      background-size: 50% 100px;
    }
  }
  .waveAnimation {
    .waveTop {
      animation: move-wave 3s;
      -webkit-animation: move-wave 3s;
      -webkit-animation-delay: 1s;
      animation-delay: 1s;
      background-image: url('../assets/img/wave-top.png');
    }
    .waveMiddle {
      animation: move_wave 10s linear infinite;
      background-image: url('../assets/img/wave-mid.png');
    }
    .waveBottom {
      animation: move_wave 15s linear infinite;
      background-image: url('../assets/img/wave-top.png');
    }
  }
}

@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}
</style>