<script setup>
import avatar from '@/assets/img/Base__elements/Main__avatar.png'

const props = defineProps({
  title: String,
  subtitle: String
})
</script>

<template>
  <div class="flex gap-20 items-center mb-5">
    <div class="flex flex-col">
      <h1 class="font-medium text-3xl text-white">{{ props.title }}</h1>
      <p class="text-subtitle">{{ props.subtitle }}</p>
    </div>
    <img :src="avatar" alt="avatar" class="avatar" />
  </div>
</template>

<style scoped>
.avatar {
  width: 70px;
}
</style>
