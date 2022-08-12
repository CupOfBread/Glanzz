<script setup lang="ts">
  import ImgBoxVue from '../../components/ImgBox.vue'
  import Navigation from '../../components/Navigation.vue'
  import AuthorBox from '../../components/AuthorBox.vue'
  import Title from '../../components/Title.vue'
  import Category from '../../components/Category.vue'
  import SiteInfo from '../../components/SiteInfo.vue'
  import Footer from '../footer/Footer.vue'
</script>

<template>
  <Navigation></Navigation>
  <ImgBoxVue></ImgBoxVue>

  <div
    class="container mx-auto max-w-5xl grid grid-cols-10 gap-8 w-11/12 lg:w-full mt-4 text-gray-600">
    <div class="lg:col-span-7 col-span-10 text-lg">
      <Title content="最新文章" icon="fa-dragon"></Title>
      <div
        class="rounded-xl md:h-56 shadow-lg hover:shadow-xl overflow-hidden article-item group md:flex justify-between mb-9 lg:hover:scale-102 duration-500">
        <a
          href=""
          class="block h-44 md:h-56 md:w-1/3 lg:w-11/20 bg-center bg-no-repeat overflow-hidden">
          <img
            :src="'https://api.ixiaowai.cn/api/api.php?id=1'"
            class="h-full w-full object-cover duration-500 lg:group-hover:scale-115 lg:group-hover:rotate-3" />
        </a>
        <div class="md:w-2/3 lg:w-9/20 p-5 duration-500">
          <div class="text-sm text-gray-400">
            <i class="fa-regular fa-clock mr-1"></i
            ><span class="hidden md:inline-block">发布于</span> 2022-08-05
          </div>
          <a href="" class="block my-2 line-clamp-2 text-black md:font-normal font-medium"
            >这是文章的标题标题标题标题标题标题标题</a
          >
          <div class="text-sm mb-2 text-gray-500">
            <span class="mr-5"><i class="fa-regular fa-eye mr-1"></i>123</span>
            <span class="mr-5"
              ><i class="fa-regular fa-comment-dots mr-1"></i>234</span
            >
            <span class="mr-5"
              ><i class="fa-regular fa-folder-closed mr-1"></i>345</span
            >
          </div>
          <a href="" class="line-clamp-2 text-sm mb-2">
            这里是文章详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情
          </a>
          <div class="text-right text-yellow-400 mt-3 hidden md:block">
            <i class="fa-solid fa-caret-right"></i
            ><i class="fa-solid fa-caret-right"></i
            ><i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>
      <div
        class="rounded-xl md:h-56 shadow-lg hover:shadow-xl overflow-hidden article-item group md:flex justify-between mb-9 lg:hover:scale-102 duration-500">
        <a
          href=""
          class="block h-44 md:h-56 md:w-1/3 lg:w-11/20 bg-center bg-no-repeat overflow-hidden lg:order-last">
          <img
            :src="'https://api.ixiaowai.cn/api/api.php?id=2'"
            class="h-full w-full object-cover duration-500 lg:group-hover:scale-115 lg:group-hover:rotate-3" />
        </a>
        <div class="md:w-2/3 lg:w-9/20 p-5 duration-500">
          <div class="text-sm text-gray-400">
            <i class="fa-regular fa-clock mr-1"></i
            ><span class="hidden md:inline-block">发布于</span> 2022-08-05
          </div>
          <a href="" class="block my-2 line-clamp-2 text-black md:font-normal font-medium"
            >这是文章的标题标题标题标题标题标题标题</a
          >
          <div class="text-sm mb-2 text-gray-500">
            <span class="mr-5"><i class="fa-regular fa-eye mr-1"></i>123</span>
            <span class="mr-5"
              ><i class="fa-regular fa-comment-dots mr-1"></i>234</span
            >
            <span class="mr-5"
              ><i class="fa-regular fa-folder-closed mr-1"></i>345</span
            >
          </div>
          <a href="" class="line-clamp-2 text-sm mb-2">
            这里是文章详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情
          </a>
          <div class="text-right text-yellow-400 mt-3 hidden md:block">
            <i class="fa-solid fa-caret-right"></i
            ><i class="fa-solid fa-caret-right"></i
            ><i class="fa-solid fa-caret-right"></i>
          </div>
        </div>
      </div>
      <a
        class="rounded-full text-gray-400 border-gray-400 w-40 h-12 border text-center flex items-center justify-center mx-auto hover:border-yellow-500 hover:shadow-yellow-500 hover:shadow-sm mt-20">
        Load More
      </a>
    </div>
    <div class="lg:col-span-3 lg:block hidden relative">
      <AuthorBox></AuthorBox>
      <Category></Category>
      <SiteInfo></SiteInfo>
    </div>
  </div>

  <div style="height: 200px"></div>
  <Footer></Footer>
</template>

<style scoped lang="scss"></style>
