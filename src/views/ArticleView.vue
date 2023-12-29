<template>
  <div>
    <div v-if="loading" class="mb-3 bg-light d-flex justify-content-center align-items-center" style="height: 80vh;">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <ArticleDetail v-else />
  </div>
</template>

<script>
import ArticleDetail from '@/components/ArticleDetail.vue';
import { mapState } from 'vuex';

export default {
  mounted() {
    this.$store.dispatch('getArticleBySlug', this.$route.params.slug);
  },
  components: { ArticleDetail },
  computed: {
    ...mapState({
      loading: state => state.articles.loading,
    })
  }
}
</script>

<style scoped></style>