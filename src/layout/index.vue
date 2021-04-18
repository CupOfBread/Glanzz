<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from '@/layout/Nav'
export default {
  name: 'Index',
  components: {
    Nav
  }
}
</script>

<style>
</style>