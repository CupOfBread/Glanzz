<script setup lang="ts">
  import ImgBoxTitle from '../../components/ImgBoxTitle.vue'
  import Navigation from '../../components/Navigation.vue'
  import articleContent from '../../access/example/about.md?raw'
  import Footer from '../footer/Footer.vue'
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
  <ImgBoxTitle
    title="关于"
    type="common"
    description="这里是关于"></ImgBoxTitle>
  <div
    class="container mx-auto max-w-4xl grid grid-cols-10 gap-4 w-11/12 lg:w-full mt-4 text-gray-600">
    <div class="col-span-10 text-lg">
      <div
        class="rounded-xl shadow-md hover:shadow-lg overflow-hidden justify-between mb-9 duration-500 p-10">
        <div
          class="article prose prose-p:mb-0 prose-p:font-light w-full max-w-full text-gray-700"
          v-html="marked(articleContent)"></div>
        <hr class="my-8" />

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
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped lang="scss"></style>
