<script setup>
import newDevice from '@/assets/img/devices/newDevice.svg'
const props = defineProps({
  title: String,
  subtitle: String,
  status: Boolean,
  image: String
})
</script>

<template>
  <div>
    <div
      v-if="props.title.length > 0"
      class="bg-cardback p-5 pb-0 rounded-3xl flex flex-col items-center gap-3"
      :class="{ 'border-white border-2': props.status === true }"
    >
      <h1 class="text-white font-bold text-2xl">{{ props.title }}</h1>
      <p class="text-subtitle">{{ props.subtitle }}</p>
      <img :src="props.image" alt="" />
    </div>
    <div
      v-else
      class="h-full border-dashed border-4 border-cardback rounded-3xl flex flex-col justify-center items-center gap-3"
    >
      <img :src="newDevice" alt="" />
      <div class="flex flex-col items-center">
        <h1 class="text-white font-bold ">Здесь появится</h1>
        <p class="text-subtitle text-xs">Ваше новое устройство!</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
