<script setup lang="ts">
  import Title from './Title.vue'
  import { useRouter } from 'vue-router'
  const route = useRouter()
  function navigateTo(path: string) {
    route.push({
      path: path,
    })
  }
</script>

<template>
  <div>
    <Title content="精选分类"></Title>
    <div>
      <div
        v-for="(item, index) in [1, 2, 3]"
        :key="index"
        class="rounded-xl shadow-lg hover:shadow-xl duration-500 overflow-hidden h-20 relative hover:scale-102 mb-4">
        <a>
          <img
            :src="'https://api.ixiaowai.cn/api/api.php?id=' + Math.random()"
            class="h-full w-full object-cover duration-500 -z-20 brightness-65" />
          <div
            class="absolute top-0 z-10 text-white w-full h-20 justify-center items-center flex text-2xl font-semibold">
            <div>分类二</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
