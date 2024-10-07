<script setup>
import { ref } from 'vue'

const toggle = ref(false)

function toggleSwich() {
  toggle.value = !toggle.value
}

const props = defineProps({
  title: String,
  percent: Number,
  image: String
})
</script>

<template>
  <div class="bg-infoBg p-5 rounded-3xl flex flex-col gap-3">
    <div class="flex gap-5 justify-start items-start">
      <div class="">
        <h2 class="text-white text-3xl font-bold">{{ props.percent }}%</h2>
        <p class="text-subtitle text-xs">{{ props.title }}</p>
      </div>
      <img :src="props.image" alt="" />
    </div>
    <h1 class="text-white font-bold text-xl">BORK V830</h1>
    <div class="border-t-2 pt-2 border-line">
      <label class="inline-flex items-center cursor-pointer grid grid-cols-2">
        <div class="text-white">
          <span class="mr-2 font-bold uppercase" v-if="!toggle"> On </span>
          <span v-else class="mr-2 font-bold uppercase">Off</span>
        </div>
        <input type="checkbox" class="sr-only peer" @change="toggleSwich" checked />
        <div
          class="transition duration-300 ease-in-out justify-self-end relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
        ></div>
      </label>
    </div>
  </div>
</template>

<style scoped></style>
