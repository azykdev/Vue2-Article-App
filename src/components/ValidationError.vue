<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item list-group-item-danger" v-for="error in errorMessage" :key="error">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ValidationError",
    props: {
      errors: {
        type: Object,
      }
    },
    computed: {
      errorMessage() {
        return Object.keys(this.errors).map(key => {
          return `${key} ${this.errors[key]}`
        })
      }
    }
  }
</script>

<style scoped>

</style>