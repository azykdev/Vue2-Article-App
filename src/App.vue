<script>
import { RouterView } from 'vue-router';
import { Navbar } from './components';
export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted() {
    this.$store.dispatch('getCurrentUser');
  }
}
</script>

<template>
  <Navbar />
  <div class="container">
    <RouterView />

  </div>
</template>

<style lang="css" scoped></style>
