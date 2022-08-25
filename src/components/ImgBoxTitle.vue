<script setup lang="ts">
  const props = defineProps({
    type: {
      type: String,
      default: 'common',
    },
    description: {
      type: String,
      default: '这是分类的描述',
    },
    title: {
      type: String,
      default: '这是一个很长很长很长的标题',
    },
    author: {
      type: String,
      default: '一杯空空的面包',
    },
    common: {
      type: String,
      default: '文学',
    },
    createTime: {
      type: String,
      default: '2022年8月19日 12:00',
    },
  })
</script>

<template>
  <div class="relative animate__animated animate__fadeInDown">
    <div class="headertop w-full h-60 md:h-80 lg:h-articleImg -z-10">
      <img
        :src="'https://api.sdgou.cc/api/sjbz/?lx=dongman&c=' + Math.random()"
        class="object-cover object-top h-full w-full brightness-65" />
    </div>
    <div
      class="absolute bottom-2 lg:top-2/5 w-full"
      style="text-shadow: 2px 2px 10px #000">
      <div class="px-3 md:p-0 md:text-center text-white">
        <div
          class="text-lg md:text-articleTitle font-semibold block lg:mb-10 md:px-12 line-clamp-2">
          {{ title }}
        </div>
        <hr class="lg:hidden" />
        <div class="block mt-2 text-xs md:text-sm text-gray-100">
          <div v-if="type == 'article'">
            <span class="mr-4"
              ><i class="fa-solid fa-user-pen mr-2"></i>{{ author }}</span
            >
            <span class="mr-4"
              ><i class="fa-solid fa-leaf mr-2"></i>{{ common }}</span
            >
          </div>
          <div class="mt-2" v-if="type == 'article'">
            <span class="mr-4"
              ><i class="fa-solid fa-calendar-days mr-2"></i
              >{{ createTime }}</span
            >
            <span class="mr-4"
              ><i class="fa-solid fa-pen-nib mr-2"></i>1.2千字</span
            >
          </div>
          <div class="mt-2" v-if="type == 'common'">{{ description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
