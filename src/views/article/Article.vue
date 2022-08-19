<script setup lang="ts">
  import ImgBoxTitle from '../../components/ImgBoxTitle.vue'
  import Navigation from '../../components/Navigation.vue'
  import Footer from '../footer/Footer.vue'
</script>

<template>
  <Navigation></Navigation>
  <ImgBoxTitle title="这是文章标题" type="article"></ImgBoxTitle>
  <div
    class="container mx-auto max-w-5xl grid grid-cols-10 gap-4 w-11/12 lg:w-full mt-4 text-gray-600">
    <div class="lg:col-span-8 col-span-10 text-lg">
      <div
        class="rounded-xl md:h-56 shadow-md hover:shadow-xl overflow-hidden group md:flex justify-between mb-9 duration-500 p-6">
        这里是文章内容
      </div>
    </div>
    <div class="lg:col-span-2 lg:block hidden text-lg">
      <div
        class="rounded-xl md:h-56 shadow-md hover:shadow-xl overflow-hidden group md:flex justify-between mb-9 duration-500 p-6">
        这里是边栏
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped lang="scss"></style>
