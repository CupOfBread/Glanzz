<script setup lang="ts">
  import { ref } from 'vue'
  const skipImgBox = () => {
    document
      .getElementById('skipImggBoxHook')
      ?.scrollIntoView({ behavior: 'smooth' })
  }
</script>

<template>
  <div class="headertop filter-dot">
    <figure id="centerbg" class="centerbg">
      <div class="focusinfo no-select">
        <h1
          class="center-text glitch is-glitching animate__animated animate__rubberBand font-sans"
          data-text="一杯面包">
          一杯面包
        </h1>
        <div class="header-info animate__animated animate__rubberBand">
          <p>
            <i class="fa fa-quote-left"></i>
            <span class="font-sans font-semibold"> GET SHIT DONE </span>
            <i class="fa fa-quote-right"></i>
          </p>
          <div class="top-social">
            <li>
              <a
                href="https://github.com/CupOfBread"
                target="_blank"
                class="github"
                ><i class="fa-brands fa-github-alt"></i
              ></a>
            </li>
            <li>
              <a
                href="https://space.bilibili.com/3300215"
                target="_blank"
                class="bilibili"
                ><i class="fa-brands fa-bilibili"></i
              ></a>
            </li>
            <li>
              <a
                href="https://music.163.com/#/user/home?id=1490296399"
                target="_blank"
                class="wyy"
                ><i class="fa-solid fa-compact-disc"></i
              ></a>
            </li>
          </div>
        </div>
      </div>
    </figure>
    <div
      class="absolute bottom-6 left-2/4 text-white text-4xl z-30 animate-bounce cursor-pointer"
      @click="skipImgBox()">
      <i class="fa-solid fa-angle-down"></i>
    </div>
  </div>
  <div id="skipImggBoxHook"></div>
</template>

<style scoped lang="scss">
  .headertop {
    position: relative;
    overflow: hidden;
    height: auto;

    .centerbg {
      background-image: url('https://api.ixiaowai.cn/api/api.php');
      background-position: center center;

      .focusinfo {
        position: relative;
        max-width: 800px;
        padding: 0 10px;
        top: 49.3%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        text-align: center;
        z-index: 10;
        -webkit-transition: 0.4s ease all;
        -moz-transition: 0.4s ease all;
        -o-transition: 0.4s ease all;
        transition: 0.4s ease all;

        .top-social {
          height: 32px;
          margin-bottom: -15px;
          margin-left: 18px;
          list-style: none;
          display: inline-block;

          li {
            float: left;
            margin-right: 18px;
            font-size: 22px;
            .bilibili {
              color: rgb(50, 156, 255);
            }
            .github {
              color: rgb(233, 233, 233);
            }
            .wyy {
              color: rgb(255, 83, 83);
            }
          }
        }

        .center-text {
          margin: auto;
          font-size: 80px;
          font-weight: 700;
          text-shadow: 2px 2px 5px rgb(73, 73, 73);
        }
        .glitch {
          position: relative;
          color: #fff;
          mix-blend-mode: lighten;
        }

        .glitch:after,
        .glitch:before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0);
          clip: rect(0, 0, 0, 0);
        }
        .glitch:before {
          left: -1px;
          text-shadow: 1px 0 #ff3f1a;
        }

        .glitch:after {
          left: 1px;
          text-shadow: -1px 0 #00a7e0;
        }

        .glitch:hover:before {
          text-shadow: 4px 0 #ff3f1a;
          animation: glitch-loop-1 0.8s infinite ease-in-out alternate-reverse;
        }

        .glitch:hover:after {
          text-shadow: -5px 0 #00a7e0;
          animation: glitch-loop-2 0.8s infinite ease-in-out alternate-reverse;
        }

        .header-info {
          width: 63%;
          margin: auto;
          font-size: 16px;
          color: #eaeadf;
          background: rgba(0, 0, 0, 0.5);
          padding: 15px;
          margin-top: 22px;
          letter-spacing: 0;
          line-height: 30px;
          border-radius: 10px;
          box-sizing: initial;
          white-space: nowrap;
        }
      }
    }

    #centerbg {
      width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
      background-position: top center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      z-index: -1;
    }
  }
  .filter-dot::before {
    background-image: url(../access/images/dot.png);
  }
  .headertop::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-attachment: fixed;
  }
  @supports (-webkit-touch-callout: none) {
    #centerbg {
      background-attachment: scroll !important;
    }
  }

  @media (max-width: 860px) {
    #centerbg,
    .headertop::before {
      background-attachment: scroll !important;
    }
    .centerbg {
      background-image: url('http://tva1.sinaimg.cn/large/005I8CXily1h4uu2la3qsj30k00sggsx.jpg') !important;
    }
    .focusinfo {
      .center-text {
        font-size: 58px !important;
      }
    }
  }
  @-webkit-keyframes glitch-loop-1 {
    0% {
      clip: rect(36px, 9999px, 9px, 0);
    }
    25% {
      clip: rect(25px, 9999px, 99px, 0);
    }
    50% {
      clip: rect(50px, 9999px, 102px, 0);
    }
    75% {
      clip: rect(30px, 9999px, 92px, 0);
    }
    100% {
      clip: rect(91px, 9999px, 98px, 0);
    }
  }

  @keyframes glitch-loop-1 {
    0% {
      clip: rect(36px, 9999px, 9px, 0);
    }
    25% {
      clip: rect(25px, 9999px, 99px, 0);
    }
    50% {
      clip: rect(50px, 9999px, 102px, 0);
    }
    75% {
      clip: rect(30px, 9999px, 92px, 0);
    }
    100% {
      clip: rect(91px, 9999px, 98px, 0);
    }
  }

  @-webkit-keyframes glitch-loop-2 {
    0% {
      top: -1px;
      left: 1px;
      clip: rect(65px, 9999px, 119px, 0);
    }
    25% {
      top: -6px;
      left: 4px;
      clip: rect(79px, 9999px, 19px, 0);
    }
    50% {
      top: -3px;
      left: 2px;
      clip: rect(68px, 9999px, 11px, 0);
    }
    75% {
      top: 0;
      left: -4px;
      clip: rect(95px, 9999px, 53px, 0);
    }
    100% {
      top: -1px;
      left: -1px;
      clip: rect(31px, 9999px, 149px, 0);
    }
  }

  @keyframes glitch-loop-2 {
    0% {
      top: -1px;
      left: 1px;
      clip: rect(65px, 9999px, 119px, 0);
    }
    25% {
      top: -6px;
      left: 4px;
      clip: rect(79px, 9999px, 19px, 0);
    }
    50% {
      top: -3px;
      left: 2px;
      clip: rect(68px, 9999px, 11px, 0);
    }
    75% {
      top: 0;
      left: -4px;
      clip: rect(95px, 9999px, 53px, 0);
    }
    100% {
      top: -1px;
      left: -1px;
      clip: rect(31px, 9999px, 149px, 0);
    }
  }
</style>
