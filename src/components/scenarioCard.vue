<script setup>
import arrow from '@/assets/img/Catalog/arrow.svg'

const props = defineProps({
  title: String,
  subtitle: String,
  image: String
})
</script>

<template>
  <div class="card">
    <img :src="props.image" alt="" />
    <div>
      <h1 class="text-white text-xl font-bold">{{ props.title }}</h1>
      <p class="text-subtitle">{{ props.subtitle }}</p>
    </div>
    <img :src="arrow" alt="" class="justify-self-end" />
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 50px max-content 1fr;
  align-items: center;
  gap: 20px;
}
</style>
