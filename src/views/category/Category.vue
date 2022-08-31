<script setup lang="ts">
  import ImgBoxTitle from '../../components/ImgBoxTitle.vue'
  import Navigation from '../../components/Navigation.vue'
  import ArticleListItem from '../../components/ArticleListItem.vue'
  import Footer from '../footer/Footer.vue'
</script>
<template>
  <Navigation></Navigation>
  <ImgBoxTitle
    title="这是分类的标题"
    type="common"
    description="没错，这就是很长很长很长的的的的描述"></ImgBoxTitle>
  <div class="container mx-auto max-w-5xl w-11/12 lg:w-full mt-4 text-gray-600 pt-6">
    <ArticleListItem
      v-for="(item, index) in [1, 2, 3, 4, 5]"
      :wideMode="true"
      :key="index"></ArticleListItem>
    <a
      class="rounded-full text-gray-400 border-gray-400 w-40 h-12 border text-center flex items-center justify-center mx-auto hover:border-yellow-500 hover:shadow-yellow-500 hover:shadow-sm mt-20">
      Load More
    </a>
  </div>
  <Footer></Footer>
</template>

<style lang="scss" scoped></style>
