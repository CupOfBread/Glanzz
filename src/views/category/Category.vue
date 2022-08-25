<script setup lang="ts">
  import ImgBoxTitle from '../../components/ImgBoxTitle.vue'
  import Navigation from '../../components/Navigation.vue'
  import Footer from '../footer/Footer.vue'
  import ArticleListItem from '../../components/ArticleListItem.vue'
</script>
<template>
  <Navigation></Navigation>
  <ImgBoxTitle
    title="这是分类的标题"
    type="common"
    description="没错，这就是很长很长很长的的的的描述"></ImgBoxTitle>
  <div class="container mx-auto max-w-5xl w-11/12 lg:w-full my-8 animate__animated animate__fadeInUp">
    这个地方大概是放所有分类的小标签，暂时还没确定下来这里放不放
  </div>
  <div
    class="container mx-auto max-w-5xl w-11/12 lg:w-full text-gray-600 animate__animated animate__fadeInUp">
    <ArticleListItem
      :narrowMode="false"
      v-for="(item, index) in [1, 2, 3, 4, 5]"
      :key="index"></ArticleListItem>
  </div>

  <a
    class="rounded-full text-gray-400 border-gray-400 w-40 h-12 border text-center flex items-center justify-center mx-auto hover:border-yellow-500 hover:shadow-yellow-500 hover:shadow-sm mt-20">
    Load More
  </a>

  <Footer></Footer>
</template>

<style lang="scss" scoped></style>
