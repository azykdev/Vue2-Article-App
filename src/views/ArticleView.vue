<template>
  <div>
    <h1>Article</h1>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('getArticleBySlug', this.$route.params.slug)
    }
  }
</script>

<style scoped>

</style>