<template>
  <div class="form-floating mb-3">
    <input :type="type" class="form-control" :placeholder="label">
    <label for="floatingInput">{{ label }}</label>
  </div>
</template>

<script setup>
defineOptions({
  name: 'MyInput',
})
defineProps({
  label: {
    type: String,
  },
  type: {
    type: String,
  }
})
</script>

<style scoped></style>