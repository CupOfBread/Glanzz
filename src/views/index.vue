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
.el-row {
  margin: 0 auto;
  margin-bottom: 20px;
  max-width: 1000px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>