<template>
  <div class="col">
    <div class="card border-0" style="font-family: 'Times New Roman', Times, serif;">
      <div class="card-header " style="background-color: #f0f0f0">
        <h6 class="my-0 fw-light text-muted mb-3">{{ article.author.username }}</h6>
        <h5 class="card-title text-dark">{{ article.title }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">{{ article.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-primary" @click="readMore()">Read more</button>
            <template v-if="user">
              <button type="button" class="btn btn-sm btn-outline-secondary" v-if="article.author.username == user.username" @click="navigateEdit">Edit</button>
              <button type="button" class="btn btn-sm btn-outline-danger" v-if="article.author.username == user.username" @click="deleteArticle()" >Delete</button>
            </template>
          </div>
          <small class="text-body-secondary">{{ new Date(article.createdAt).toLocaleString() }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "ArticleCard",
  props: {
    article: Object
  },
  methods: {
    readMore() {
      this.$router.push({ name: 'article', params: { slug: this.article.slug } })
    },
    deleteArticle() {
      this.$store.dispatch('deleteArticle', this.article.slug).then(() => {
        this.$store.dispatch('getArticles')
      })
    },
    navigateEdit() {
      this.$store.dispatch('getArticleBySlug', this.article.slug).then(() => {
        this.$router.push({name: 'edit-article', params: { slug: this.article.slug} })
      })
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  }
}
</script>

<style scoped></style>