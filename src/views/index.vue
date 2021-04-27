<template>
  <IndexBanner />
  <Notice />
  <el-row>
    <el-col :span="16">
      <MainList />
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light">sidebar</div>
    </el-col>
  </el-row>

</template>

<script>
import IndexBanner from '@/components/IndexBanner'
import Notice from '@/components/Notice'
import MainList from '@/components/MainList'
export default {
  components: {
    IndexBanner, Notice, MainList
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