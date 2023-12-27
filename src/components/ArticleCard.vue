<template>
  <div class="col">
    <div class="card shadow-sm">
      <div class="card-header " style="background-color: #1f1f1f">
        <h6 class="my-0 fw-light text-muted mb-3">{{ article.author.username }}</h6>
        <h5 class="card-title text-light">{{ article.title }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">{{ article.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-body-secondary">9 mins</small>
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
  }
}
</script>

<style scoped></style>