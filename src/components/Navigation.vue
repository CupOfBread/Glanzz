<script setup lang="ts">
  import { onMounted, ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  const store = useStore()
  const route = useRouter()

  onMounted(() => {
    window.addEventListener('scroll', scrollTop, true)
  })
  const scroll = ref(0)
  const scrollTop = () => {
    scroll.value = document.documentElement.scrollTop || document.body.scrollTop
  }
  function showMobileNavigation(flag: boolean) {
    store.commit('changeMobileNavView', flag)
  }
  function navigateTo(path: string) {
    showMobileNavigation(false)
    route.push({
      path: path,
    })
  }
</script>

<template>
  <div
    class="z-40 bg-black opacity-60 fixed w-full h-full duration-500"
    @click="showMobileNavigation(false)"
    v-show="store.state.showMobileNav"></div>
  <div
    class="absolute top-2 left-close-mnav text-4xl text-white w-10 z-900 animate__animated animate__backInLeft"
    v-show="store.state.showMobileNav"
    @click="showMobileNavigation(false)">
    <i class="fa-solid fa-xmark"></i>
  </div>
  <div
    class="z-900 fixed h-full w-2/3 bg-slate-50 duration-500 animate__animated animate__slideInLeft p-9 overflow-x-hidden overflow-y-auto"
    v-show="store.state.showMobileNav">
    <div class="rounded-full overflow-hidden w-20 h-20 mx-auto shadow-lg my-4">
      <img
        class="w-full h-full hover:rotate-360 duration-700 object-cover object-center"
        :src="'https://api.sdgou.cc/api/sjtx/?lx=c1'" />
    </div>
    <div class="text-center mb-4 text-lg">{{store.state.authorInfo.AuthorInfo.name}}</div>
    <div class="text-center mb-4 text-xs text-gray-500">
      {{store.state.authorInfo.AuthorInfo.saying}}
    </div>

    <ul class="text-left pl-8 text-gray-800">
      <li
        class="mb-4"
        v-for="(item, index) in store.state.nav.nav"
        :key="index"
        @click="navigateTo(item.path)">
        <i class="mr-2" :class="item.icon"></i>{{ item.name }}
      </li>
    </ul>

    <div>还没做完呢，我知道你很急，但是你先别急！<br />ヾ(≧▽≦*)o</div>
    <div class="text-center text-gray-400 pb-8 mt-24 text-xs">
      <div
        class="text-red-400 animate__animated animate__bounce animate__infinite">
        <i class="fa-solid fa-heart"></i>
      </div>
      <div class="">
        <i class="fa-regular fa-copyright mr-1"></i>
        <span class=""
          >{{ store.state.siteInfo.SiteInfo.startYear }} - 2022</span
        >
        <span class="block lg:inline-block">{{
          store.state.siteInfo.SiteInfo.title
        }}</span>
      </div>
    </div>
  </div>
  <div
    class="w-full h-20 fixed top-0 z-40 transition duration-500 bg-white/10 lg:hover:bg-white/90 hover:shadow backdrop-blur-sm justify-between flex"
    :class="scroll > 70 ? 'bg-white' : ''">
    <div class="text-shadow relative h-20 flex items-center mx-6 text-2xl">
      <div class="mr-4 md:hidden" @click="showMobileNavigation(true)">
        <i class="fa-solid fa-align-justify"></i>
      </div>
      {{ store.state.siteInfo.SiteInfo.title }}
    </div>

    <div class="justify-between mx-8 text-gray-800 flex">
      <ul
        class="h-20 mx-8 justify-start space-x-6 items-center hidden md:flex text-shadow">
        <li
          v-for="(item, index) in store.state.nav.nav"
          :key="index"
          @click="navigateTo(item.path)">
          <a class="transition group"
            ><i class="group-hover:animate-bounce mr-2" :class="item.icon"></i
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <div class="h-20 flex items-center">
        <a class="w-6 h-6 text-center">
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
  .text-shadow {
    text-shadow: 0.5px 0.5px #c9c9c9;
  }
</style>
