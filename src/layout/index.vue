<template>
  <Nav v-if="windowWidth>1000" />
  <router-view />
  <Footer />
</template>

<script>
import Nav from '@/layout/Nav'
import Footer from '@/components/Footer'
export default {
  name: 'Index',
  components: {
    Nav, Footer
  },
  data () {
    return {
      windowWidth: 0
    }
  },
  created () {
    this.windowWidth = window.innerWidth
  },
}
</script>

<style>
</style>