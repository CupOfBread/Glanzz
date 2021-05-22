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
</template>

<script>
import IndexBanner from '@/components/IndexBanner'
import Notice from '@/components/Notice'
import MainList from '@/components/MainList'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    IndexBanner, Notice, MainList, Sidebar
  },
  data () {
    return {
    }
  },
  mounted () {
    if (window.innerWidth < 1024) {
      alert("本网站并未对手机端进行优化，请使用电脑端访问！")
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 1000px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>