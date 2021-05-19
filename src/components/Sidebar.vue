<template>
  <div class="side-bar">
    <div class="site-info side-bar-item">
      <h3 class="title">
        <p style="text-align: center;"><i class="fas fa-bullhorn"></i>面包房的小黑屋</p>
        <p class="line l1"> </p>
        <p class="line l2"></p>
        <p class="line l3"> </p>
      </h3>
      <div class="content">
        <p><i class="fas fa-heartbeat"></i>分享热爱</p>
        <p><i class="fas fa-location-arrow"></i>浙江 · 杭州</p>
        <p><i class="fas fa-copy"></i>共 58 篇文章</p>
      </div>
    </div>
    <div class="author-list side-bar-item">
      <h3 class="title">
        <i class="fa fa-pencil-alt"></i>本站作者
        <p class="line l1"> </p>
        <p class="line l2"></p>
        <p class="line l3"> </p>
      </h3>
      <div class="content">
        <div class="author">
          <div class="avatar">
            <img src="@/assets/img/logo.png"
                 alt="">
          </div>
          <div class="author-info">
            <p class="name">一杯面包</p>
            <p class="saying">一沙一世界，一花一天堂。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="classifi-list side-bar-item">
      <h3 class="title">
        <i class="fa fa-cube"></i>分类目录
        <p class="line l1"> </p>
        <p class="line l2"> </p>
        <p class="line l3"> </p>
      </h3>
      <div class="content">
        <p><a href="#"><i class="fa fa-book"></i><span>这是一个分类</span></a></p>
        <p><a href="#"><i class="fa fa-book"></i><span>这是一个分类</span></a></p>
        <p><a href="#"><i class="fa fa-book"></i><span>这是一个分类</span></a></p>
        <p><a href="#"><i class="fa fa-book"></i><span>这是一个分类</span></a></p>
      </div>

    </div>
    <div class="hot-article side-bar-item">
      <h3 class="title">
        <i class="fa fa-heartbeat"></i>热门文章
        <p class="line l1"> </p>
        <p class="line l2"> </p>
        <p class="line l3"> </p>
      </h3>
      <div class="content">
        <p><a href=""><i class="fa fa-paperclip"></i><span>这是一篇文章</span></a></p>
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
a {
  color: rgb(102, 102, 102);
  :hover {
    color: rgb(163, 163, 163);
  }
}
.side-bar {
  display: inline-block;
  width: 94%;
  .side-bar-item {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease;
    margin: 6px auto;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 26px;
    .title {
      color: #000;
      font-size: 16px;
      line-height: 16px;
      text-align: left;
      height: 20px;
      font-weight: 700;
      position: relative;
      i {
        margin-right: 4px;
      }
      .line {
        content: '';
        position: absolute;
        bottom: -5px;
        display: block;
        height: 0.17rem;
        border-radius: 4px;
        transition: 0.25s;
        z-index: 1;
      }
      .l1 {
        background-color: #e2615e;
        // box-shadow: 0 2px 3px #ff9966;
        left: 0;
        width: 10rem;
      }
      .l2 {
        background-color: #f4929b;
        // box-shadow: 0 2px 3px #ff6666;
        left: 10em;
        width: 4rem;
      }
      .l3 {
        background-color: #e7cfd8;
        // box-shadow: 0 2px 3px #ffcccc;
        left: 14em;
        width: 2.8rem;
      }
    }
    .content {
      margin-top: 14px;
      width: 100%;
      padding: 0 8px;
      box-sizing: border-box;
      i {
        margin-right: 6px;
      }
      p {
        font-size: 14px;
        line-height: 22px;
        color: rgb(53, 53, 53);
      }
    }
    &:hover {
      box-shadow: 0 5px 10px 5px rgba(139, 139, 139, 0.295);
    }
  }
  .site-info {
    .content {
      text-align: center;
    }
  }
  .author-list {
    vertical-align: top;
    .content {
      text-align: left;
      vertical-align: top;
      padding: 3px 8px;
      .author {
        height: 64px;
      }
      .avatar {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        overflow: hidden;
        float: left;
        box-shadow: 0 2px 5px 0px rgba(110, 110, 110, 0.4);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .author-info {
        float: left;
        height: 50px;
        margin-left: 12px;
        box-sizing: border-box;
        margin-top: 5px;
        .name {
          color: rgb(29, 29, 29);
          font-size: 15px;
          font-weight: 600;
        }
        .saying {
          font-size: 12px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
  .classifi-list {
    text-align: left;
    .content p {
      i {
        margin-right: 4px;
      }
    }
  }
  .hot-article {
    text-align: left;
  }
}
</style>
