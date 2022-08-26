<script setup lang="ts">
  import ImgBoxTitle from '../../components/ImgBoxTitle.vue'
  import Navigation from '../../components/Navigation.vue'
  import Footer from '../footer/Footer.vue'
  import articleContent from '../../access/example/crazyman.md?raw'
  import { marked } from 'marked'
  import hljs from 'highlight.js'
  import 'highlight.js/styles/vs2015.css'
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    highlight: (code, lang) => hljs.highlight(code, { language: lang }).value,
  })
</script>

<template>
  <Navigation></Navigation>
  <ImgBoxTitle title="这是文章标题" type="article"></ImgBoxTitle>
  <div
    class="container mx-auto max-w-5xl grid grid-cols-10 gap-4 w-11/12 lg:w-full mt-4 text-gray-600">
    <div class="lg:col-span-8 col-span-10 text-lg">
      <div
        class="rounded-xl shadow-md hover:shadow-lg overflow-hidden justify-between mb-9 duration-500 p-10">
        <div
          v-html="marked(articleContent)"
          class="article prose prose-p:mb-0 prose-p:font-light w-full max-w-full text-gray-700"></div>
        <hr class="my-8" />
        <div class="justify-center flex gap-8">
          <div
            class="reward bg-red-500 w-10 h-10 text-white rounded-full text-center leading-10 cursor-pointer relative">
            赏
            <div
              class="qr bg-white absolute top-14 h-28 w-28 -left-9 duration-500 p-2 shadow-xl z-30">
              <img src="../../access/images/hh.png" class="w-full h-full" />
            </div>
          </div>
        </div>
        <div class="text-center text-sm m-4 text-gray-400">
          <i class="fa-regular fa-closed-captioning mr-1"></i
          >知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
        </div>
        <div class="text-right text-gray-400 text-sm">
          <span class="hover:text-green-500 duration-700 cursor-pointer"
            ><i class="fa-solid fa-share mr-1"></i>12</span
          >
          <span class="ml-4 hover:text-red-500 duration-700 cursor-pointer"
            ><i class="fa-solid fa-heart mr-1"></i>96</span
          >
        </div>
        <hr class="my-5" />
        <div class="grid md:grid-cols-2">
          <div class="overflow-hidden h-36 relative group cursor-pointer">
            <img
              :src="
                'https://api.sdgou.cc/api/sjbz/?lx=dongman&c=' + Math.random()
              "
              class="object-cover object-top h-full w-full brightness-65 group-hover:scale-105 duration-500" />
            <div class="absolute top-1/4 left-6 text-white">
              <div class="text-gray-200 text-xs">上一篇</div>
              <div class="text-xl">文章标题</div>
            </div>
          </div>
          <div class="overflow-hidden h-36 relative group cursor-pointer">
            <img
              :src="
                'https://api.sdgou.cc/api/sjbz/?lx=dongman&c=' + Math.random()
              "
              class="object-cover object-top h-full w-full brightness-65 group-hover:scale-105 duration-500" />
            <div class="absolute top-1/4 right-6 text-white">
              <div class="text-gray-200 text-xs text-right">下一篇</div>
              <div class="text-xl">文章标题</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:col-span-2 lg:block hidden text-lg">
      <div
        class="rounded-xl md:h-56 shadow-md hover:shadow-xl overflow-hidden group md:flex justify-between mb-9 duration-500 p-6 sticky top-28">
        这里是边栏
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped lang="scss">
  .article {
    p {
      margin-bottom: 20px;
    }
  }
  .qr {
    display: none;
  }
  .reward:hover .qr {
    display: block;
    transition: all 1s ease;
  }
</style>
