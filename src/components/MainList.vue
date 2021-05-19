<template>
  <div class="main-list">
    <div class="article">
      <div class="header-pic">
        <img src="@/assets/img/bg1.png">
      </div>
      <div class="info">
        <p class="title"><a>文章详情实例</a></p>
        <p class="sub-title">
          <i class="fa fa-calendar"></i><span>2020-5-30</span>
          <i class="fa fa-user"></i><span>一杯面包</span>
          <i class="fa fa-bookmark"></i><span>编程开发</span>
          <i class="fa fa-eye"></i><span>100</span>
        </p>
        <p class="desc">没错没错，点我就可以打开文章详情页没错没错，点我就可以打开文章详情页没错没错，点我就可以打开文章详情页没错没错，点我就可以打开文章详情页实例和开发日历没错没错，点我就可以打开文章详情页实例和开发日历没错没错，点我就可以打开文章详情页实例和开发日历没错没错，点我就可以打开文章详情页实例和开发日历</p>
      </div>
    </div>
    <div class="article">
      <div class="header-pic">
        <img src="@/assets/img/bg2.png">
      </div>
      <div class="info">
        <p class="title"><a>分类文章目录</a></p>
        <p class="sub-title">
          <i class="fa fa-calendar"></i><span>2020-6-6</span>
          <i class="fa fa-user"></i><span>一杯面包</span>
          <i class="fa fa-bookmark"></i><span>呵呵哒</span>
          <i class="fa fa-eye"></i><span>100</span>
        </p>
        <p class="desc">进入分类文章目录</p>
      </div>
    </div>
    <div class="article">
      <div class="header-pic">
        <img src="@/assets/img/bg3.png">
      </div>
      <div class="info">
        <p class="title"><a>Page页面</a></p>
        <p class="sub-title">
          <i class="fa fa-calendar"></i><span>2020-5-29</span>
          <i class="fa fa-user"></i><span>BUG汤</span>
          <i class="fa fa-bookmark"></i><span>艺术设计</span>
          <i class="fa fa-eye"></i><span>78</span>
        </p>
        <p class="desc">没错，就是一个简单的page页面</p>
      </div>
    </div>
    <div class="article">
      <div class="header-pic">
        <img src="@/assets/img/bg1.png">
      </div>
      <div class="info">
        <p class="title"><a>友情链接</a></p>
        <p class="sub-title">
          <i class="fa fa-calendar"></i><span>2020-5-29</span>
          <i class="fa fa-user"></i><span>BUG汤</span>
          <i class="fa fa-bookmark"></i><span>艺术设计</span>
          <i class="fa fa-eye"></i><span>78</span>
        </p>
        <p class="desc">描述描述描述描述描描述描述描述描述描述描述描述描述述描述描述描述描述描述述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
      </div>
    </div>
    <div class="article">
      <div class="header-pic">
        <img src="@/assets/img/bg2.png">
      </div>
      <div class="info">
        <p class="title"><a>后台管理页面</a></p>
        <p class="sub-title">
          <i class="fa fa-calendar"></i><span>2020-5-31</span>
          <i class="fa fa-user"></i><span>一杯面包</span>
          <i class="fa fa-bookmark"></i><span>分类</span>
          <i class="fa fa-eye"></i><span>438</span>
        </p>
        <p class="desc">虽然可以进入后台管理页面，但是由于项目进度问题不一定能登录成功</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      img: {
        one: '@/assets/img/bg1.png',
        two: '@/assets/img/bg2.png',
        three: '@/assets/img/bg3.png',
        four: '@/assets/img/bg1.png',
        five: '@/assets/img/bg2.png'
      }
    }
  },
  methods: {
    open (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-list {
  display: inline-block;
  width: 100%;
  .article {
    // height: 310px;
    width: 94%;
    margin: 6px auto;
    margin-bottom: 34px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.5);
    position: relative;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    .header-pic {
      width: 100%;
      height: 220px;
      background-color: rgb(180, 180, 180);
      overflow: hidden;
      text-align: center;
      img {
        width: 100%;
        transition: 1s ease;
      }
    }
    .info {
      box-sizing: border-box;
      padding: 14px;
      .title {
        font-size: 18px;
        color: rgb(36, 36, 36);
        font-weight: 700;
        transition: 0.2s all ease;
      }
      .sub-title {
        margin-top: 12px;
        font-size: 10px;
        color: rgb(107, 107, 107);
        i {
          margin-right: 4px;
        }
        span {
          margin-right: 18px;
        }
      }
      .desc {
        color: rgb(92, 92, 92);
        margin-top: 10px;
        width: 100%;
        font-size: 12px;
        line-height: 15px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
  .article:hover {
    box-shadow: 0 5px 10px 5px rgba(110, 110, 110, 0.4);
    .info {
      .title {
        color: #fe9600;
      }
    }
    .header-pic {
      img {
        width: 105%;
      }
    }
  }
}
</style>
