<script setup>
import { getCurrentInstance } from 'vue'
import info from '@/assets/img/Base__elements/icons/info.svg'
import arrow from '@/assets/img/Base__elements/icons/arrow.svg'
import moon from '@/assets/img/Base__elements/icons/moon.svg'
import S8ProUltra from '@/assets/img/devices/S8ProUltra.svg'
import infoCard from '@/components/infoCard.vue'
import scenarioSlider from '@/components/scenarioSlider.vue'
import { useRouter } from 'vue-router'
const { proxy } = getCurrentInstance()

const moreInfo = proxy.$text.moreInfo
const router = useRouter()
function goBack() {
  router.back()
}
</script>

<template>
  <div class="bg-infoBack h-full w-full bg-no-repeat">
    <div class="w-full flex gap-28 p-5">
      <button @click="goBack">
        <img :src="arrow" alt="" />
      </button>
      <h1 class="text-white text-2xl font-bold">{{ moreInfo.title }}</h1>
      <img :src="info" alt="" />
    </div>
    <div class="flex flex-col items-center mt-20 gap-5">
      <img :src="moon" alt="" class="w-20" />
      <h2 class="text-white text-2xl font-bold">{{ moreInfo.scenarioName }}</h2>
    </div>
    <div class="grid grid-cols-2 gap-4 p-5 mt-5">
      <infoCard
        v-for="(card, index) in moreInfo.cardInfo.cards"
        :key="index"
        :title="card.title"
        :percent="card.percent"
        :image="card.image"
      />
      <div
        class="col-span-2 flex flex-col justify-center items-center gap-2 bg-infoBg rounded-3xl p-3"
      >
        <scenarioSlider
          v-for="(slide, index) in moreInfo.slider"
          :key="index"
          :title="slide.title"
        />
      </div>
      <div class="bg-infoBg p-2 rounded-3xl">
        <img :src="S8ProUltra" alt="" class="w-36" />
      </div>
      <div class="bg-infoBg p-5 rounded-3xl flex flex-col gap-3">
        <div class="flex gap-5 justify-start items-start">
          <div class="">
            <h2 class="text-white text-sm font-bold">{{ moreInfo.cardInfo.card.title }}</h2>
          </div>
          <img :src="moreInfo.cardInfo.card.image" alt="" class=""/>
        </div>
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
    </div>
  </div>
</template>

<style scoped></style>
