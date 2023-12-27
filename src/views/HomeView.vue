<script>
  import { mapState } from 'vuex';
  export default {
    name: 'HomeView',
    computed: {
      ...mapState({
        articles: state => state.articles.articles,
        loading: state => state.articles.loading,
        error: state => state.articles.error
      })
    },
    mounted() {
      this.$store.dispatch('getArticles');
    }
  }
</script>

<template>
  <h1>Home</h1>
</template>

<style lang="css" scoped>
  
</style>
