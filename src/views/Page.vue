<template>
  <div>
    <div class="top-bg animate__animated animate__fadeInDown">
      <img src="https://i.loli.net/2021/05/21/3FeVrTmJdtwnWhp.jpg"
           alt="">
      <div class="page-header">
        <div class="title">Page</div>
        <div class="desc">这还是一个莫得感情的页面</div>
      </div>
    </div>
    <div class="content animate__animated animate__slideInUp">
      <div class="detail">
        <h1>h1这篇文章的ID是：{{id}}</h1>
        <h2>h2历史性的一步！增加了文章目录！</h2>
        <h3>h3ddd</h3>
        <p>这是第一段的内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
        <p>这是一个文章内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容</p>
        <p>文章内容也在紧锣密鼓地排版中，由于typo.css不符合预期，所以就打算自己写样式了。</p>
        <el-timeline>
          <el-timeline-item timestamp="2020-6-6"
                            placement="top"
                            color="#0bbd87">
            <el-card>
              <p>样式、动画视觉效果调整<br>
                分类文章列表页面开始制作</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2020-6-5"
                            placement="top"
                            color="#0bbd87">
            <el-card>
              <p>文章详情页面样式调整<br>
                首页文章列表与侧边栏分离(模块化)，导航路由调整<br>
                文章列表图片懒加载</p>
            </el-card>
          </el-timeline-item>

        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      scrollHeight: '',
      title: 'Page',
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
  mounted () {
    this.id = this.$route.params.id
  }
}

</script>

<style lang="scss" scoped>
@import '@/styles/Page.scss';
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
  &:hover {
    img {
      width: 102%;
    }
  }
}
.page-header {
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
  max-width: 830px;
  margin: 0 auto;
  margin-top: 50px;
  border: solid 1px #fff;
  position: relative;
  display: block;
  text-align: justify;
}
</style>
