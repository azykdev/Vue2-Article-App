<script>
import { mapState } from 'vuex';
import { ArticleCard } from '../components'
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
  },
  components: {
    ArticleCard
  }
}
</script>

<template>
  <div class="container">
    <div v-if="loading" class="mb-3 bg-light d-flex justify-content-center align-items-center" style="height: 80vh;">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <ArticleCard  v-for="article in articles" :key="article.id" :article="article" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
