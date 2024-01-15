<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from '../store'
  import { storeToRefs } from 'pinia'

  const route = useRouter()

  const store = useStore()

  const { showMobileNav, AuthorInfo, Nav, SiteInfo, Category } =
    storeToRefs(store)

  onMounted(() => {
    window.addEventListener('scroll', scrollTop, true)
  })

  const scroll = ref(0)
  const switchType = ref(0)
  const scrollTop = () => {
    scroll.value = document.documentElement.scrollTop || document.body.scrollTop
  }
  function showMobileNavigation(flag: boolean) {
    store.changeMobileNavView(flag)
  }
  function navigateTo(path: string) {
    showMobileNavigation(false)
    route.push({
      path: path,
    })
  }
  function backToTop() {
    let time = setInterval(() => {
      if (scroll.value <= 0) {
        clearInterval(time)
      } else {
        scroll.value = scroll.value - 50
        document.documentElement.scrollTop = scroll.value // 让滚动盒子的高度= 0
      }
    }, 10)
  }
</script>

<template>
  <div
    class="z-40 bg-black opacity-60 fixed w-full h-full duration-500"
    @click="showMobileNavigation(false)"
    v-show="showMobileNav"></div>
  <div
    class="absolute top-2 left-close-mnav text-4xl text-white w-10 z-900 animate__animated animate__backInLeft"
    v-show="showMobileNav"
    @click="showMobileNavigation(false)">
    <i class="fa-solid fa-xmark"></i>
  </div>
  <div
    class="z-900 fixed h-full w-2/3 bg-slate-50 duration-500 animate__animated animate__slideInLeft p-9 overflow-x-hidden overflow-y-auto"
    v-show="showMobileNav">
    <div class="rounded-full overflow-hidden w-20 h-20 mx-auto shadow-lg my-4">
      <img
        class="w-full h-full hover:rotate-360 duration-700 object-cover object-center"
        :src="'https://api.horosama.com/random.php?&c=' + Math.random()" />
    </div>
    <div class="text-center mb-4 text-lg">{{ AuthorInfo.AuthorInfo.name }}</div>
    <div class="text-center mb-4 text-xs text-gray-500">
      {{ AuthorInfo.AuthorInfo.saying }}
    </div>
    <div class="px-8 mb-6 justify-between flex text-orange-400">
      <div
        class="relative"
        :class="switchType == 0 ? 'switch-active ' : ''"
        @click="switchType = 0">
        导航
      </div>
      <div
        class="relative"
        :class="switchType == 1 ? 'switch-active ' : ''"
        @click="switchType = 1">
        分类
      </div>
    </div>
    <ul class="text-left pl-8 text-gray-800 mb-10" v-show="switchType == 0">
      <li
        class="mb-4"
        v-for="(item, index) in Nav.nav"
        :key="index"
        @click="navigateTo(item.path)">
        <i class="mr-2" :class="item.icon"></i>{{ item.name }}
      </li>
    </ul>
    <ul class="text-center text-gray-800 mb-10" v-show="switchType == 1">
      <li
        class="mb-4"
        v-for="(item, index) in Category.Categories"
        :key="index"
        @click="navigateTo('/c')">
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
        <span class="">{{ SiteInfo.SiteInfo.startYear }} - 2022</span>
        <span class="block lg:inline-block">{{ SiteInfo.SiteInfo.title }}</span>
      </div>
    </div>
  </div>
  <div
    class="w-full h-20 fixed top-0 z-50 transition duration-500 bg-white/10 lg:hover:bg-white/90 hover:shadow backdrop-blur-sm justify-between flex animate__animated"
    :class="[
      scroll > 70 ? 'bg-white' : '',
      scroll > 500 ? 'animate__backOutUp' : 'animate__fadeInDown',
    ]">
    <div class="text-shadow relative h-20 flex items-center mx-6 text-2xl">
      <div class="mr-4 md:hidden" @click="showMobileNavigation(true)">
        <i class="fa-solid fa-align-justify"></i>
      </div>
      {{ SiteInfo.SiteInfo.title }}
    </div>

    <div class="justify-between mx-8 text-gray-800 flex">
      <ul
        class="h-20 mx-8 justify-start space-x-6 items-center hidden md:flex text-shadow">
        <li
          v-for="(item, index) in Nav.nav"
          class="relative h-20 nav-item"
          :key="index">
          <a
            class="transition group h-20 inline-block leading-20"
            @click="navigateTo(item.path)"
            ><i class="group-hover:animate-bounce mr-2" :class="item.icon"></i
            >{{ item.name }}</a
          >
          <div
            v-show="item.name === '分类页示例'"
            class="dropdown-menu bg-white absolute top-full left-0 rounded-md py-2 animate__animated animate__bounceInDown animate__faster hidden">
            <a
              class="block hover:bg-gray-200 h-9 leading-9 pl-3"
              v-for="(item, index) in Category.Categories"
              :key="index"
              @click="navigateTo('/c')">
              <i class="mr-2" :class="item.icon"></i>{{ item.name }}
            </a>
          </div>
        </li>
      </ul>
      <div class="h-20 flex items-center">
        <a class="w-6 h-6 text-center">
          <i class="fa-solid fa-magnifying-glass"></i
        ></a>
      </div>
    </div>
  </div>
  <div
    class="fixed -top-36 right-12 z-20 hidden animate__animated animate__bounceInDown cursor-pointer"
    :class="scroll > 200 ? 'md:block' : 'md:block animate__bounceOutUp'"
    @click="backToTop()">
    <img src="../access/images/scroll.png" />
  </div>
</template>

<style scoped lang="scss">
  .switch-active::before {
    position: absolute;
    z-index: -5;
    top: 100%;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    content: '';
    border-radius: 0.2rem;
    background: rgb(255, 176, 92);
  }
  .text-shadow {
    text-shadow: 0.5px 0.5px #c9c9c9;
  }
  .dropdown-menu {
    min-width: 10rem;
  }
  .dropdown-menu::before {
    position: absolute;
    z-index: -5;
    bottom: 100%;
    left: 30px;
    display: block;
    width: 16px;
    height: 16px;
    content: '';
    transform: rotate(-45deg) translateY(1rem);
    border-radius: 0.2rem;
    background: #fff;
    box-shadow: none;
  }
  .nav-item {
    &:hover .dropdown-menu {
      display: block;
    }
  }
</style>
