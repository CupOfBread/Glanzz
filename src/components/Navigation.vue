<script setup lang="ts">
import { onMounted, ref } from 'vue'
onMounted(() => {
  window.addEventListener('scroll', scrollTop, true)
})
const scroll = ref(0)
const scrollTop = () => {
  scroll.value = document.documentElement.scrollTop || document.body.scrollTop
}

</script>

<template>
  <div
    class="w-full h-20 fixed top-0 z-50 transition duration-500 bg-white/10 hover:bg-white/80 hover:shadow backdrop-blur-sm justify-between flex"
    :class="scroll > 70 ? 'bg-white' : ''"
  >
    <div class="brand relative h-20 flex items-center mx-8 text-2xl">
      面包的烘焙坊
    </div>

    <div class="flex justify-between mx-8 text-gray-800">
      <ul class="h-20 mx-8 flex justify-start space-x-6 items-center">
        <li>
          <a href="" class="transition duration-300 group"
            ><i
              class="group-hover:animate-bounce fa-brands fa-fort-awesome mr-2"
            ></i
            >按钮1</a
          >
        </li>
        <li>
          <a href="" class="transition duration-300 group"
            ><i class="group-hover:animate-bounce fa-solid fa-tree mr-2"></i
            >按钮2</a
          >
        </li>
        <li>
          <a href="" class="transition duration-300 group"
            ><i class="group-hover:animate-bounce fa-solid fa-heart mr-2"></i
            >按钮3</a
          >
        </li>
        <li>
          <a href="" class="transition duration-300 group"
            ><i class="group-hover:animate-bounce fa-brands fa-envira mr-2"></i
            >按钮4</a
          >
        </li>
      </ul>
      <div class="h-20 flex items-center">
        <a href="" class="w-6 h-6 text-center">
          <i class="fa-solid fa-magnifying-glass"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-white {
  background-color: rgba(255, 255, 255, 0.836);
}
.brand {
  text-shadow: 1px 1px #c1c1c1;
}
a:hover {
  color: #f59e0b;
}
</style>
