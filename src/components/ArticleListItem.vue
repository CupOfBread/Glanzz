<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const props = defineProps({
    rightImg: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '这是一个标题',
    },
    abstract: {
      type: String,
      default: '这是摘要啊详情详情详情，很长很长很长很长很长很很长很长很长很很长很长很长很很长很长很长很很长很长很长很很长很长很长很很长很长很长很很长很长很长很长的详情',
    },
    views: {
      type: Number,
      default: 521,
    },
    comments: {
      type: Number,
      default: 23,
    },
    category: {
      type: String,
      default: '文章分类',
    },
    publishTime: {
      type: String,
      default: '2022-08-05',
    },
    wideMode: {
      type: Boolean,
      default: false,
    },
  })

  const route = useRouter()
  function navigateTo(path: string) {
    route.push({
      path: path,
    })
  }
</script>

<template>
  <div
    class="rounded-xl md:h-56 shadow-lg hover:shadow-xl overflow-hidden article-item group md:flex justify-between mb-9 lg:hover:scale-102 duration-500">
    <a
      @click="navigateTo('/a')"
      class="block h-44 md:h-56 md:w-1/3 lg:w-11/20 overflow-hidden"
      :class="[
        rightImg ? 'order-last' : '',
        wideMode ? 'lg:w-1/3' : 'lg:w-11/20',
      ]">
      <img
      :src="'https://api.horosama.com/random.php?&c=' + Math.random()"
        class="h-full w-full object-cover duration-500 lg:group-hover:scale-115 lg:group-hover:rotate-3" />
    </a>
    <div
      class="md:w-2/3 p-5 duration-500"
      :class="[wideMode ? 'lg:w-2/3' : 'lg:w-9/20']">
      <div class="text-sm text-gray-400">
        <i class="fa-regular fa-clock mr-1"></i
        ><span class="hidden md:inline-block">发布于</span> {{ publishTime }}
      </div>
      <a
        @click="navigateTo('/a')"
        class="block my-2 line-clamp-2 text-black md:font-normal font-medium"
        ><span
          class="border border-red-600 text-red-600 px-2 text-sm rounded-xl inline-block mr-1"
          >置顶</span
        >{{ title }}</a
      >
      <div class="text-sm mb-2 text-gray-500">
        <span class="mr-5"
          ><i class="fa-regular fa-eye mr-1"></i>{{ views }}</span
        >
        <span class="mr-5"
          ><i class="fa-regular fa-comment-dots mr-1"></i>{{ comments }}</span
        >
        <span class="mr-5"
          ><i class="fa-regular fa-folder-closed mr-1"></i>{{ category }}</span
        >
      </div>
      <a class="line-clamp-2 text-sm mb-2" @click="navigateTo('/a')">
        {{ abstract }}
      </a>
      <div class="text-right text-yellow-400 mt-6 hidden md:block">
        <i class="fa-solid fa-caret-right"></i
        ><i class="fa-solid fa-caret-right"></i
        ><i class="fa-solid fa-caret-right"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
