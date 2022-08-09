<script setup lang="ts">
const props = defineProps(['content','icon'])

</script>

<template>
  <h1 class="block border-dashed border-b border-gray-300 py-1 mb-7 mt-4">
    <i class="fa fa-anchor mr-2 text-xl" :class="icon?icon:'fa-anchor'"></i>{{content}}
  </h1>
</template>

<style scoped lang="scss"></style>
