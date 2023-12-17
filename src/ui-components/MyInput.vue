<template>
  <div class="form-floating mb-3">
    <input :type="type" class="form-control" :placeholder="label" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
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
  },
  modelValue: {
    type: [String, Number],
  }
})

</script>

<style scoped></style>