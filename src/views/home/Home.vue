<script setup lang="ts">
import ImgBoxVue from '../../components/ImgBox.vue'
import Navigation from '../../components/Navigation.vue'
</script>

<template>
  <Navigation></Navigation>
  <ImgBoxVue></ImgBoxVue>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="/vite.svg" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">Home</div>
      <p class="text-gray-500">That's home page</p>
    </div>
  </div>
  <div style="height: 1000px"></div>

</template>

<style scoped lang="scss"></style>
