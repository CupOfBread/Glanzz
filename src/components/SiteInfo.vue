<script setup lang="ts">
  import Title from './Title.vue'
  import { useStore } from '../store'
  import { storeToRefs } from 'pinia'
  const store = useStore()
  const { SiteInfo } = storeToRefs(store)
</script>

<template>
  <div>
    <Title content="网站信息" icon="fa-chart-line"></Title>
    <div class="px-2">
      <div class="mb-1 flex justify-between">
        <span>文章数目：</span><span>562篇</span>
      </div>
      <div class="mb-1 flex justify-between">
        <span>运行时间：</span><span>869天</span>
      </div>
      <div class="mb-1 flex justify-between">
        <span>本站总字数：</span><span>1,562字</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
