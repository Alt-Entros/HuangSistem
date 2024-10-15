<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
  <button class="bg-btn-gradient p-5 rounded-3xl font-bold text-xl">
    <p>{{ props.title }}</p>
  </button>
</template>

<style scoped></style>
