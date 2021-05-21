<template>
  <div>
    <div class="top-bg animate__animated animate__fadeInDown">
      <img src="https://i.loli.net/2021/05/21/lYBCXTHq7J3wzQR.jpg"
           alt="">
      <div class="article-header">
        <div class="title">这是一个寂寞的标题</div>
        <div class="article-info">
          <div class="avatar">
            <img src="../assets/img/logo.png"
                 alt="">
          </div>
          <div class="info">
            <i class="fa fa-user"></i><span>一杯面包</span>
            <i class="fa fa-calendar"></i><span>2020-5-31</span>
            <i class="fa fa-eye"></i><span>80</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content animate__animated animate__slideInUp"
         ref="content"
         v-loading="loading">
      <div class="detail"
           v-html="article.content">

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      scrollHeight: '',
      article: {
        id: '',
        title: '文章标题',
        content: ''
      }
    }
  },
  created () {

  },
  methods: {
  },
  mounted () {
    this.article.id = this.$route.params.id
    this.scrollHeight = 'height:' + window.getComputedStyle(this.$refs.content).height
    this.article.content = "<h1>这篇文章的ID是：{{article.id}}</h1><h2>历史性的一步！增加了文章目录！</h2><h3>345</h3><p>这是第一段的内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p><p>这是一个文章内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容</p><p>文章内容也在紧锣密鼓地排版中，由于typo.css不符合预期，所以就打算自己写样式了。</p><h1>文章信息</h1><p>{{article}}</p><p>文章是否发布:{{article.publish}}</p><p>文章id:{{article.id}}</p><p>文章内容:{{article.content}}</p><p>文章views:{{article.views}}</p>"
  }
}

</script>

<style lang="scss">
@import '@/styles/Page.scss';
</style>
<style lang="scss" scoped>
@import '@/styles/Page.scss';

i {
  margin-right: 6px;
}
.top-bg {
  box-sizing: border-box;
  width: 100%;
  height: 440px;
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
.article-header {
  z-index: 99;
  max-width: 860px;
  margin: 0 auto;
  position: absolute;
  text-align: left;
  left: 0;
  right: 0;
  bottom: 5%;
  z-index: 1;
  color: #fff;
  .title {
    font-size: 46px;
    text-shadow: 2px 2px 10px #000;
    font-weight: 800;
    margin-bottom: 24px;
    white-space: nowrap;
  }
  .avatar {
    height: 36px;
    width: 36px;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 2px 5px 0px rgba(110, 110, 110, 0.4);
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    font-size: 14px;
    float: left;
    height: 36px;
    line-height: 36px;
    margin-left: 18px;
    text-shadow: 2px 2px 10px #000;
    span {
      margin-right: 18px;
    }
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
  .catalog-container {
    position: absolute !important;
    transform: translateX(0);
    right: -290px;
    z-index: 9999;
    top: 0;
  }
  .detail {
    position: absolute;
    top: 0;
  }
}
</style>
