<template>
  <button class="w-100 btn btn-lg btn-primary">
    <slot></slot>
  </button>
</template>

<script setup>
  defineOptions({
    name: "MyButton",
    
  })
</script>

<style scoped>

</style>