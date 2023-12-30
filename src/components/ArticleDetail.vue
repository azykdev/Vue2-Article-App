<template>
  <div class="overflow-hidden" v-if="articleBySlug">
    <div class="row g-2">
      <div class="col-12">
        <div class="p-3 ">
          <h2>{{ articleBySlug.title }}</h2>
        </div>
      </div>
      <div class="col-md-8">
        <div class="p-3 ">
          <p class="text-muted">Description:</p>
          <p class="card-text font-monospace" >{{ articleBySlug.description }}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 ">
          <p class="text-muted font-monospace">Created: {{ new Date(articleBySlug.createdAt).toLocaleString() }}</p>
          <p class="text-muted m-0 font-monospace">Updated: {{ new Date(articleBySlug.updatedAt).toLocaleString() }}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3 ">
          <p class="text-muted">Author:</p>
          <div class="d-flex align-items-center">
            <img src="https://via.placeholder.com/50" alt="" class="rounded-circle" style="width: 50px; height: 50px;">
            <p class="card-text ms-2">{{ articleBySlug.author.username }}</p>
          </div>
          <p class="text-muted mt-3">Bio:</p>
          <p class="card-text ms-2">{{ articleBySlug.author.bio }}</p>
        </div>
      </div>
      <div class="col-md-8">
        <div class="p-3 ">
          <p class="text-muted">Content:</p>
          <p class="card-text font-monospace" >{{ articleBySlug.body }}</p>
        </div>
      </div>
    </div>
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

<style scoped></style>