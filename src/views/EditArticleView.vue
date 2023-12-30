<template>
  <EditArticleForm v-if="articleBySlug" :articleBySlug="articleBySlug" :editArticle="editArticle"/>
</template>

<script>
import EditArticleForm from '@/components/EditArticleForm.vue';
import { mapState } from 'vuex';
export default {
  methods: {
    editArticle(article) {
      this.$store.dispatch('editArticle', article).then(() => {
        this.$router.push({name: 'home'})
        this.$store.dispatch('getArticles')
      });
    }
  },
  mounted() {
    this.$store.dispatch('getArticleBySlug', this.$route.params.slug);
  },
  computed: {
    ...mapState({
      articleBySlug: state => state.articles.articleBySlug
    })
  },
  components: { EditArticleForm }
}
</script>
