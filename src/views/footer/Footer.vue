<script setup lang="ts">
  import { useStore } from '../../store'
  import { storeToRefs } from 'pinia'
  const { SiteInfo } = storeToRefs(useStore())
</script>

<template>
  <div class="text-center text-gray-400 pb-8 mt-24">
    <div
      class="text-red-400 animate__animated animate__bounce animate__infinite">
      <i class="fa-solid fa-heart"></i>
    </div>
    <div class="mb-2 text-sm">
      Crafted with <a class="text-yellow-500">Glanzz</a> by
      <a class="text-yellow-500">Cup_Of_Bread</a>
    </div>
    <div class="w-1/2 mx-auto">
      <i class="fa-regular fa-copyright mr-2"></i>
      <span class="mr-2">2021-2022</span>
      <span class="mr-2 block lg:inline-block">{{
        SiteInfo.SiteInfo.title
      }}</span>
      <span class="mr-2 block lg:inline-block">{{
        SiteInfo.SiteInfo.icp
      }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
