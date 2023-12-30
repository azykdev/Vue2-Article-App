<template>
  <form @submit.prevent>
    <MyInput type="text" label="Title" v-model="article.title" />
    <MyInput type="text" label="Description" v-model="article.description" />
    <MyTextArea label="Body" v-model="article.body" />
    <div class="w-25">
      <MyButton @click="createArticle">Create Article</MyButton>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        taglist: []
      }
    }
  },
  methods: {
    createArticle() {
      this.$store.dispatch('createArticle', this.article).then(() => {
        this.$router.push({name: 'home'})
      })
    }
  }
}
</script>

<style scoped></style>