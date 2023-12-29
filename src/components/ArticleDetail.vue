<template>
  <div>
    {{ articleBySlug }}
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "ArticleDetail",
    computed: {
      ...mapState({
        articleBySlug: state => state.articles.articleBySlug
      })
    }
  }
</script>

<style scoped>

</style>