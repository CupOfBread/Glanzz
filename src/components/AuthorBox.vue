<script setup lang="ts">
  import Title from './Title.vue'
  import { useStore } from '../store'
  import { storeToRefs } from 'pinia'
  const { AuthorInfo } = storeToRefs(useStore())
</script>

<template>
  <Title content="本站作者"></Title>
  <div
    class="rounded-xl shadow-lg hover:shadow-xl duration-500 overflow-hidden group text-center relative">
    <div class="absolute -z-50 w-full h-full transform rotate-45 top-0">
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
      <div class="shooting_star"></div>
    </div>
    <div
      class="rounded-full overflow-hidden w-20 h-20 inline-block mt-6 shadow-lg">
      <img
        class="w-full h-full hover:rotate-360 duration-700"
        :src="'https://api.horosama.com/random.php?&c=' + Math.random()" />
    </div>
    <div class="my-4 text-xl">{{ AuthorInfo.AuthorInfo.name }}</div>
    <div class="mb-6">{{ AuthorInfo.AuthorInfo.saying }}</div>
    <div class="grid grid-cols-3 gap-2 px-10 text-center mb-6">
      <a>
        <div class="text-gray-500">文章</div>
        <div class="text-xl font-bold pb-4">152</div>
      </a>
      <a>
        <div class="text-gray-500">分类</div>
        <div class="text-xl font-bold pb-4">12</div>
      </a>
      <a>
        <div class="text-gray-500">评论</div>
        <div class="text-xl font-bold pb-4">86</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .shooting_star {
    position: absolute;
    top: 0;
    left: 0;
    height: 0.125rem;
    background: linear-gradient(-45deg, #f59f0b94, rgba(0, 0, 255, 0));
    border-radius: 62rem;
    filter: drop-shadow(0 0 0.375rem #f59f0b67);
    animation: tail 3000ms ease-in-out infinite,
      shooting 3000ms ease-in-out infinite;
  }
  .shooting_star::before,
  .shooting_star::after {
    content: '';
    position: absolute;
    top: -1px;
    right: 0;
    height: 0.125rem;
    background: linear-gradient(
      -45deg,
      rgba(0, 0, 255, 0),
      var(--blue),
      rgba(0, 0, 255, 0)
    );
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: shining 3000ms ease-in-out infinite;
  }
  .shooting_star::after {
    transform: translateX(50%) rotateZ(-45deg);
  }
  .shooting_star:nth-child(1) {
    top: calc(40% - 6.75rem);
    left: calc(40% - 5.5rem);
    animation-delay: 6400ms;
  }
  .shooting_star:nth-child(1)::before,
  .shooting_star:nth-child(1)::after,
  .shooting_star:nth-child(1)::after {
    animation-delay: 6400ms;
  }
  .shooting_star:nth-child(2) {
    top: calc(40% - 0.625rem);
    left: calc(40% - 2rem);
    animation-delay: 1400ms;
  }
  .shooting_star:nth-child(2)::before,
  .shooting_star:nth-child(2)::after,
  .shooting_star:nth-child(2)::after {
    animation-delay: 1400ms;
  }
  .shooting_star:nth-child(3) {
    top: calc(40% - 0.125rem);
    left: calc(40% - 2.125rem);
    animation-delay: 2600ms;
  }
  .shooting_star:nth-child(3)::before,
  .shooting_star:nth-child(3)::after,
  .shooting_star:nth-child(3)::after {
    animation-delay: 2600ms;
  }
  .shooting_star:nth-child(4) {
    top: calc(40% - 8.625rem);
    left: calc(40% - 8rem);
    animation-delay: 1800ms;
  }
  .shooting_star:nth-child(4)::before,
  .shooting_star:nth-child(4)::after,
  .shooting_star:nth-child(4)::after {
    animation-delay: 1800ms;
  }
  .shooting_star:nth-child(5) {
    top: calc(40% - -5.125rem);
    left: calc(40% - 16.625rem);
    animation-delay: 3500ms;
  }
  .shooting_star:nth-child(5)::before,
  .shooting_star:nth-child(5)::after,
  .shooting_star:nth-child(5)::after {
    animation-delay: 3500ms;
  }
  .shooting_star:nth-child(6) {
    top: calc(40% - 4.25rem);
    left: calc(40% - 3.5rem);
    animation-delay: 6200ms;
  }
  .shooting_star:nth-child(6)::before,
  .shooting_star:nth-child(6)::after,
  .shooting_star:nth-child(6)::after {
    animation-delay: 6200ms;
  }

  @keyframes tail {
    0% {
      width: 0;
    }
    30% {
      width: 6.25rem;
    }
    100% {
      width: 0;
    }
  }

  @keyframes shining {
    0% {
      width: 0;
    }
    50% {
      width: 1.875rem;
    }
    100% {
      width: 0;
    }
  }

  @keyframes shooting {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(18.75rem);
    }
  }
</style>
