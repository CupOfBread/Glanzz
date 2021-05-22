<template>
  <div>
    <div class="top-bg animate__animated animate__fadeInDown">
      <img src="https://i.loli.net/2021/05/22/uAFvWa7IfwLJe6c.jpg"
           alt="">
      <div class="classi-header">
        <div class="title">这是分类名称</div>
        <div class="desc">这是一句简短的描述啊</div>
      </div>
    </div>
    <div class="content animate__animated animate__slideInUp">
      <div class="article">
        <div class="header-pic">
          <img src="https://i.loli.net/2021/05/21/lYBCXTHq7J3wzQR.jpg">
        </div>
        <div class="info">
          <p class="title"><a>开发日历/文章详情实例</a></p>
          <p class="sub-title">
            <i class="fa fa-calendar"></i><span>2020-5-30</span>
            <i class="fa fa-user"></i><span>一杯面包</span>
            <i class="fa fa-bookmark"></i><span>编程开发</span>
            <i class="fa fa-eye"></i><span>100</span>
          </p>
          <p class="desc">没错没错，点我就可以打开文章详情，点我就可以打开文章详情，点我就可以打开文章详情，点我就可以打开文章详情页实例和开没错没错，点我就可以打开文章详情页实例和开没错没错，点我就可以错，点我就可以打开文章详情页实例和开没错没错，点我就可以打开文章详情页实例和开没错没错，点我就可以打开文章详情页实例和开发日历</p>
        </div>
      </div>
      <div class="article">
        <div class="header-pic right">
          <img src="https://i.loli.net/2021/05/21/3FeVrTmJdtwnWhp.jpg">
        </div>
        <div class="info">
          <p class="title"><a>开发日历/文章详情实例</a></p>
          <p class="sub-title">
            <i class="fa fa-calendar"></i><span>2020-5-30</span>
            <i class="fa fa-user"></i><span>一杯面包</span>
            <i class="fa fa-bookmark"></i><span>编程开发</span>
            <i class="fa fa-eye"></i><span>100</span>
          </p>
          <p class="desc">没错没错，点我就可以打开文章详情，点我就可以打开文章详情，点我就可以打开文章详情，点我就可以打开文章详情页实例和开没错没错，点我就可以打开文章详情页实例和开没错没错，点我就可以错，点我就可以打开文章详情页实例和开没错没错，点我就可以打开文章详情页实例和开没错没错，点我就可以打开文章详情页实例和开发日历</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {
        id: '',
        title: '文章分类'
      },
      img: {
        one: 'https://lab.cupbread.cn/wp-content/themes/Siren/images/random/d-1.jpg',
        two: 'https://i.loli.net/2020/05/15/FuMGBOjTpv4aQI6.jpg',
        three: 'https://i.loli.net/2020/05/15/xqPIXFUsh475kOG.jpg',
        four: 'https://lab.cupbread.cn/wp-content/themes/Siren/images/random/d-3.jpg'
      }
    }
  },
  methods: {
  },
}

</script>

<style lang="scss" scoped>
i {
  margin-right: 6px;
}
.top-bg {
  box-sizing: border-box;
  width: 100%;
  height: 380px;
  background-color: #000;
  overflow: hidden;
  text-align: center;
  position: relative;
  img {
    width: 100%;
    transition: all 0.8s ease;
    display: inline-block;
  }
}
.top-bg:hover {
  img {
    width: 102%;
  }
}
.classi-header {
  z-index: 99;
  width: 90%;
  margin: 0 auto;
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 14%;
  z-index: 1;
  color: #fff;
  .title {
    font-size: 50px;
    text-shadow: 2px 2px 10px #000;
    font-weight: 800;
    margin-bottom: 24px;
    white-space: nowrap;
  }
  .desc {
    text-align: center;
    text-shadow: 2px 2px 10px #000;
  }
}
.content {
  box-sizing: border-box;
  max-width: 860px;
  margin: 0 auto;
  margin-top: 50px;
  border: solid 1px #fff;
  min-height: 800px;
  position: relative;
  .article {
    height: 140px;
    width: 94%;
    margin: 6px auto;
    margin-bottom: 34px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.301);
    position: relative;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    .header-pic {
      width: 25%;
      height: 100%;
      background-color: rgb(180, 180, 180);
      overflow: hidden;
      text-align: center;
      display: inline-block;
      vertical-align: top;
      img {
        height: 100%;
        transition: 0.8s ease;
      }
    }
    .info {
      box-sizing: border-box;
      vertical-align: top;
      padding: 15px 20px;
      display: inline-block;
      height: 100%;
      width: 75%;
      overflow: hidden;
      .title {
        font-size: 20px;
        color: #000;
        font-weight: 700;
        padding: 7px 0;
        transition: color 0.4s ease;
      }
      .sub-title {
        margin-top: 8px;
        font-size: 13px;
        i {
          margin-right: 4px;
        }
        span {
          margin-right: 18px;
        }
      }
      .desc {
        margin-top: 10px;
        width: 100%;
        font-size: 15px;
        line-height: 17px;
        height: 34px;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
  .article:hover {
    box-shadow: 0 5px 10px 5px rgba(110, 110, 110, 0.295);
    .info {
      .title {
        color: #fe9600;
      }
    }
    .header-pic {
      img {
        height: 105%;
      }
    }
  }
}
</style>
