<script setup lang="ts">
import ImgBoxVue from '../../components/ImgBox.vue'
import Navigation from '../../components/Navigation.vue'
</script>

<template>
  <Navigation></Navigation>
  <ImgBoxVue></ImgBoxVue>
  <!-- <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="/vite.svg" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">Home</div>
      <p class="text-gray-500">That's home page</p>
    </div>
  </div> -->

  <div
    class="container mx-auto max-w-5xl grid grid-cols-6 gap-8 w-11/12 lg:w-full mt-4 text-gray-600"
  >
    <div class="lg:col-span-4 col-span-6 text-lg">
      <h1 class="block border-dashed border-b border-gray-300 py-1 mb-7 mt-4">
        <i class="fa fa-anchor mr-2 text-xl"></i>这是一个标题
      </h1>
      <div
        class="rounded-xl h-56 shadow-lg hover:shadow-xl duration-500 overflow-hidden article-item group flex justify-between mb-9"
      >
        <a
          href=""
          class="block h-56 w-11/20 bg-center bg-no-repeat overflow-hidden"
        >
          <img
            :src="
              'https://api.ixiaowai.cn/api/api.php?id=' +
              Math.floor(Math.random() * 100)
            "
            class="h-full w-full object-cover duration-500 group-hover:scale-110"
          />
        </a>
        <div class="w-9/20 p-5">
          <div class="text-sm text-gray-500">
            <i class="fa-regular fa-clock mr-1"></i
            ><span class="hidden md:inline-block">发布于</span> 2022-08-05
          </div>
          <a href="" class="block my-2 line-clamp-2 text-black"
            >这是文章的标题标题标题标题标题标题标题</a
          >
          <div class="text-sm mb-2 text-gray-500">
            <span class="mr-5 hidden md:inline-block"><i class="fa-regular fa-eye mr-1"></i>123</span>
            <span class="mr-5 hidden md:inline-block"
              ><i class="fa-regular fa-comment-dots mr-1"></i>123</span
            >
            <span class="mr-5"
              ><i class="fa-regular fa-folder-closed mr-1"></i>123</span
            >
          </div>
          <a href="" class="line-clamp-2 text-sm mb-2">
            这里是文章详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情
          </a>
          <div class="text-right text-yellow-400 mt-3">
            <i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:col-span-2 lg:block hidden">
      <h1 class="block border-dashed border-b border-gray-300 py-1 mb-7 mt-4">
        <i class="fa fa-anchor mr-2 text-xl"></i>右侧栏
      </h1>
    </div>
  </div>

  <div style="height: 1000px"></div>
</template>

<style scoped lang="scss"></style>
