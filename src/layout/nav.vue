<template>
  <header :style="header_bg"
          @mouseover="mouseOver"
          @mouseleave="mouseLeave">
    <div class="branding">
      <a href="https://lab.cupbread.cn"><img src="@/assets/img/logo.png"></a>
    </div>
    <UserGravatar />
    <div class="navi">
      <ul>
        <li><a @click="open('/')"><i class="fa fa-flag"
               aria-hidden="true"></i>首页</a></li>
        <li><a @click="open('/')"><i class="fa fa-laptop"
               aria-hidden="true"></i>编程开发</a></li>
        <li><a @click="open('/')"><i class="fa fa-puzzle-piece"
               aria-hidden="true"></i>艺术设计</a></li>
        <li><a @click="open('/')"><i class="fa fa-coffee"
               aria-hidden="true"></i>资讯与看法</a></li>
        <li><a @click="open('/')"><i class="fa fa-check"
               aria-hidden="true"></i>思想与总结</a></li>
        <li><a @click="open('/')"><i class="fa fa-paper-plane"
               aria-hidden="true"></i>关于</a></li>
        <li><a href="">有子菜单</a>
          <ul class="sub-menu">
            <li><a href="https://lab.cupbread.cn/coding/cpp/">C++</a></li>
            <li><a href="https://lab.cupbread.cn/coding/java/">Java</a></li>
            <li><a href="https://lab.cupbread.cn/coding/ui/">UI</a></li>
            <li><a href="https://lab.cupbread.cn/coding/vue/">Vue</a></li>
            <li><a href="https://lab.cupbread.cn/coding/network/">网络技术</a></li>
          </ul>
        </li>
      </ul>
    </div>

  </header>
</template>

<script>
import UserGravatar from '@/layout/nav/UserGravatar'
export default {
  components: {
    UserGravatar
  },
  data () {
    return {
      scroll_height: 0,
      header_bg: 'box-shadow: none',
    }
  },
  created () {
    this.listenerFunction()
  },
  beforeUnmount () {
    document.removeEventListener('scroll', this.listenerFunction)
  },
  methods: {
    listenerFunction () {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    handleScroll () {
      this.scroll_height = window.pageYOffset
      if (this.scroll_height > 0) {
        this.header_bg = 'background-color: #fff;box-shadow: 0px 1px 9px 2px rgba(0, 0, 0, 0.2);'
      } else if (this.scroll_height === 0) {
        this.header_bg = 'background-color: rgba(255, 255, 255, 0.2);box-shadow: none;'
      }
    },
    open (path) {
      this.$router.push(path)
    },
    mouseOver () {
      this.header_bg = 'background-color: #fff;box-shadow: 0px 1px 9px 2px rgba(0, 0, 0, 0.2);'
    },
    mouseLeave () {
      if (this.scroll_height === 0) {
        this.header_bg = 'background-color: rgba(255, 255, 255, 0.2);box-shadow: none;'
      }
    },
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  min-height: 75px;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-transition: all 0.4s ease;
  transition: all 0.6s ease;
  position: fixed;
  z-index: 99;
  top: 0;
  padding: 0 24px;
  box-sizing: border-box;

  &:hover {
    background-color: #fff;
    box-shadow: 0px 1px 9px 2px rgba(0, 0, 0, 0.2);
  }

  .branding {
    float: left;
    position: relative;
    height: 75px;
    line-height: 75px;
    margin-left: -6px;
    a {
      color: #464646;
      font-weight: 400;
      img {
        height: 45px;
        margin-top: 14px;
        opacity: 0.75;
        -webkit-transition: color 0.2s ease-out, border 0.2s ease-out,
          opacity 0.2s ease-out;
        -moz-transition: color 0.2s ease-out, border 0.2s ease-out,
          opacity 0.2s ease-out;
        transition: color 0.2s ease-out, border 0.2s ease-out,
          opacity 0.2s ease-out;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .navi {
    position: relative;
    float: right;
    font-size: 16px;
    margin-right: 18px;
    display: block !important;
    height: 75px;
    line-height: 75px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: inline-block;
      li {
        float: left;
        margin-left: 28px;
        position: relative;
        transition: all 1s ease;
        a {
          display: inline-block;
          color: #747474;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        a:hover {
          color: #fe9600;
          cursor: pointer;
        }
        i {
          margin: 0 5px;
        }
        .sub-menu {
          display: block;
          opacity: 1;
          position: absolute;
          background: #fff;
          padding: 10px;
          top: 68px;
          left: -30px;
          min-width: 100px;
          text-align: center;
          white-space: nowrap;
          z-index: 9999;
          border-radius: 5px;
          box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 0.5);
          animation: fadeInUp 0.3s 0.1s ease both;
          li {
            width: 100%;
            margin: 0;
            height: 46px;
            line-height: 46px;
            a {
              height: 100%;
            }
          }
        }
        ul::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 50%;
          margin-left: -10px;
          border-width: 10px;
          border-style: solid;
          border-color: transparent transparent #fff transparent;
        }
        :hover ul {
          display: inline-block;
          -webkit-transition: all 0.4s;
          transition: all 0.4s;
        }
      }
    }
  }
}
</style>