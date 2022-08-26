<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import ImgBoxVue from '../../components/ImgBox.vue'
  import AuthorBox from '../../components/AuthorBox.vue'
  import Title from '../../components/Title.vue'
  import Category from '../../components/Category.vue'
  import SiteInfo from '../../components/SiteInfo.vue'
  import Navigation from '../../components/Navigation.vue'
  import Footer from '../footer/Footer.vue'
  import ArticleListItem from '../../components/ArticleListItem.vue'

  const route = useRouter()
  function navigateTo(path: string) {
    route.push({
      path: path,
    })
  }
</script>

<template>
  <Navigation></Navigation>
  <ImgBoxVue></ImgBoxVue>
  <div
    class="container mx-auto max-w-5xl grid grid-cols-10 gap-8 w-11/12 lg:w-full mt-4 text-gray-600">
    <div class="lg:col-span-7 col-span-10 text-lg">
      <Title content="最新文章" icon="fa-dragon"></Title>
      <ArticleListItem
        v-for="(item, index) in [1, 2, 3, 4, 5]"
        :key="index"
        :rightImg="index % 2 === 1"></ArticleListItem>

      <a
        class="rounded-full text-gray-400 border-gray-400 w-40 h-12 border text-center flex items-center justify-center mx-auto hover:border-yellow-500 hover:shadow-yellow-500 hover:shadow-sm mt-20">
        Load More
      </a>
    </div>
    <div class="lg:col-span-3 lg:block hidden relative">
      <AuthorBox></AuthorBox>
      <div class="sticky top-32">
        <Category></Category>
        <SiteInfo></SiteInfo>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped lang="scss"></style>
