<script setup>
import { ref, onMounted } from 'vue'
import sun from '@/assets/img/Base__elements/icons/cards/sun.svg'

const props = defineProps({
  title: String
})

const value = ref(50)

const updateBackground = (event) => {
  value.value = event.target.value
  event.target.style.setProperty('--value', `${(value.value / event.target.max) * 100}%`)
}

onMounted(() => {
  const slider = document.getElementById('light-control')
  slider.style.setProperty('--value', `${(value.value / slider.max) * 100}%`)
})
</script>

<template>
  <div>
    <label for="light-control" class="text-lg text-gray-300 mb-2 font-light">{{
      props.title
    }}</label>
    <div class="flex items-center gap-10">
      <input
        type="range"
        id="light-control"
        class="slider w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        min="0"
        max="100"
        value="50"
        @input="updateBackground"
      />
      <img :src="sun" alt="" class="w-8" />
    </div>
  </div>
</template>

<style scoped>
.slider {
  background: linear-gradient(
    to right,
    #e0e0e0 var(--value),
    #7c6e6e var(--value)
  ); /* Градиент для фона */
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px; /* Ширина бегунка */
  height: 24px; /* Высота бегунка */
  border-radius: 50%; /* Округлая форма */
  background: #ffffff; /* Цвет бегунка */
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4); /* Тень для бегунка */
}

.slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
}
</style>
