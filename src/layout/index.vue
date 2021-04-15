<template>
  <Nav />
  <router-view />
</template>

<script>
import Nav from '@/layout/nav'
export default {
  name: 'Index',
  components: {
    Nav
  }
}
</script>

<style>
</style>