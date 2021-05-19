<template>
  <IndexBanner />
  <Notice />
  <el-row>
    <el-col :span="16">
      <MainList />
    </el-col>
    <el-col :span="8">
      <Sidebar />
    </el-col>
  </el-row>
  <Footer />

  <el-backtop :bottom="80"
              :visibility-height=100>
    <a class="cd-top"
       style="top: -22px;"></a>
  </el-backtop>
</template>

<script>
import IndexBanner from '@/components/IndexBanner'
import Notice from '@/components/Notice'
import MainList from '@/components/MainList'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'
export default {
  components: {
    IndexBanner, Notice, MainList, Sidebar, Footer
  }
}
</script>

<style lang="scss" scoped>
.el-backtop {
  box-shadow: none;
  z-index: 98;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
  .cd-top {
    top: -30px;
    position: fixed;
    right: 7%;
    width: 70px;
    height: 86%;
    background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png)
      no-repeat center;
    background-size: contain;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    opacity: 1;
    // animation: float 2s linear infinite;
    animation: fadeInDown 0.7s 0.1s ease both;
    // -moz-animation: fadeInDown 0.7s 0.1s ease both;
  }
}

.el-row {
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 1000px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>