<template>
  <div class="col">
    <div class="card border-0" style="font-family: 'Times New Roman', Times, serif;">
      <div class="card-header " style="background-color: #d7d7d7">
        <h6 class="my-0 fw-light text-muted mb-3">{{ article.author.username }}</h6>
        <h5 class="card-title text-dark">{{ article.title }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">{{ article.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="readMore()">Read more</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-body-secondary">{{ new Date(article.createdAt).toLocaleString() }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: Object
  },
  methods: {
    readMore() {
      this.$router.push({ name: 'article', params: { slug: this.article.slug } })
    }
  }
}
</script>

<style scoped></style>