<template>
  <div>
    <form @submit.prevent>
      <MyInput type="text" label="Title" v-model="article.title" />
      <MyInput type="text" label="Description" v-model="article.description" />
      <MyTextArea label="Body" v-model="article.body" />
      <div class="w-25">
        <MyButton @click="editArticleHandler">Edit Article</MyButton>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        slug: this.articleBySlug.slug,
        title: this.articleBySlug.title,
        description: this.articleBySlug.description,
        body: this.articleBySlug.body,
        taglist: []
      }
    }
  },
  props: {
    articleBySlug: Object,
    editArticle: Function
  },
  methods: {
    editArticleHandler() {
      this.editArticle(this.article)
    }
  }
}
</script>

<style scoped></style>