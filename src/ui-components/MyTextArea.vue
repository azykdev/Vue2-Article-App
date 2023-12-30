<template>
  <div class="form-floating mb-3">
    <textarea class="form-control" style="height: 25vh;" :placeholder="label" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea>
    <label for="floatingInput">{{ label }}</label>
  </div>
</template>

<script setup> 
defineOptions({
  name: 'MyTextArea',
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