<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  const props = defineProps({
    toc: {
      type: Array<{
        name: any
        children: any
        scrollTop: any
      }>,
      default: [],
    },
    current: {
      type: String,
      default: '',
    },
  })

  onMounted(() => {
    window.addEventListener('scroll', scrollTop, true)
  })
  const scroll = ref(0)
  const current = ref('')
  const scrollTop = () => {
    scroll.value = document.documentElement.scrollTop || document.body.scrollTop
    for (let i = 0; i < props.toc.length; i++) {
      if (scroll.value > props.toc[i].scrollTop - 91) {
        current.value = props.toc[i].name
      }
    }
  }
  function toTitle(scrollTop: number, currentTitle: string) {
    window.scrollTo({ top: scrollTop - 90, behavior: 'smooth' })
    current.value = currentTitle
  }
</script>

<template>
  <ul class="w-full">
    <li v-for="(h2, index) in toc" :key="index" class="mb-1">
      <a
        class="text-lg line-clamp-1 w-full"
        @click="toTitle(h2.scrollTop, h2.name)"
        :class="h2.name === current ? ' text-yellow-500  underline ' : ''"
        >{{ h2.name }}</a
      >
      <ul v-for="(h3, index) in h2.children" :key="index">
        <li>
          <a
            class="ml-2 text-base line-clamp-1 my-1"
            @click="toTitle(h3.scrollTop, h3.name)"
            >{{ h3.name }}</a
          >
          <ul v-for="(h4, index) in h3.children" :key="index">
            <li>
              <a
                class="ml-4 text-sm line-clamp-1"
                @click="toTitle(h4.scrollTop, h4.name)"
                >{{ h4.name }}</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
