<script setup lang="ts">
  import ImgBoxTitle from '../../components/ImgBoxTitle.vue'
  import Navigation from '../../components/Navigation.vue'
  import Footer from '../footer/Footer.vue'
  import Title from '../../components/Title.vue'

  function openUrl(url: string) {
    window.open(url, '_blank')
  }
</script>

<template>
  <Navigation></Navigation>
  <ImgBoxTitle
    title="友人帐"
    type="common"
    description="这里是友人帐"></ImgBoxTitle>

  <div
    class="container mx-auto max-w-5xl grid grid-cols-10 gap-8 w-11/12 lg:w-full mt-4 text-gray-600">
    <div class="lg:col-span-10 col-span-10 text-lg">
      <Title content="个人项目" icon="fa-solid fa-basketball"></Title>
      <div class="mb-6">这里是友链分类的简介，个人项目个人项目&lt;(￣︶￣)↗</div>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        <div
          class="rounded-md overflow-hidden p-3 grid grid-cols-4 duration-500 border hover:border-orange-400 group hover:scale-102 hover:cursor-pointer"
          @click="openUrl('https://www.baidu.com')"
          v-for="(item, index) in [1, 2, 3]"
          :key="index">
          <div class="rounded-full overflow-hidden h-16 w-16 col-span-1">
            <img
              :src="'https://api.sdgou.cc/api/sjtx/?lx=lx&c=' + Math.random()"
              class="w-full h-full object-cover object-center" />
          </div>
          <div class="h-16 col-span-3">
            <div class="text-gray-800">Glanzz</div>
            <div class="line-clamp-2 text-sm text-gray-400">
              开源、前后端分离、分布式、微服务博客系统。
            </div>
          </div>
        </div>
      </div>

      <Title content="分类1" icon="fa-solid fa-cannabis"></Title>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        <div
          class="rounded-md overflow-hidden p-3 grid grid-cols-4 duration-500 border hover:border-orange-400 group hover:scale-102 hover:cursor-pointer"
          v-for="(item, index) in [1, 2, 3, 1, 1, 1, 1, 1, 1]"
          :key="index">
          <div class="rounded-full overflow-hidden h-16 w-16 col-span-1">
            <img
              :src="'https://api.sdgou.cc/api/sjtx/?lx=lx&c=' + Math.random()"
              class="w-full h-full object-cover object-center" />
          </div>
          <div class="h-16 col-span-3">
            <div class="text-gray-800">Glanzz</div>
            <div class="line-clamp-2 text-sm text-gray-400">
              开源、前后端分离、分布式、微服务博客系统。
            </div>
          </div>
        </div>
      </div>
      <Title content="分类2"></Title>
    </div>
    <!-- <div class="lg:col-span-3 lg:block hidden text-lg">
      <Title content="边栏"></Title>
      <div>123</div>
    </div> -->
  </div>
  <Footer></Footer>
</template>

<style scoped lang="scss"></style>
