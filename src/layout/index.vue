<template>
  <Nav />
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
  }
}
</script>

<style>
</style>