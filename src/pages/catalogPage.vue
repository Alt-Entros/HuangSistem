<script setup>
import { getCurrentInstance } from 'vue'
import mainHeader from '@/components/mainHeader.vue'
import scenarioCard from '@/components/scenarioCard.vue'
import triplDots from '@/assets/img/devices/triplDots.svg'
import slide from '@/assets/img/catalog/slide.png'

const { proxy } = getCurrentInstance()
const catalogPage = proxy.$text.catalogPage
</script>

<template>
  <div class="p-5 flex flex-col gap-3">
    <mainHeader :title="catalogPage.title" />
    <div class="flex flex-col items-center">
      <div class="flex flex-col gap-5">
        <scenarioCard
          v-for="(card, index) in catalogPage.scenarioInfo.cards"
          :key="index"
          :title="card.title"
          :subtitle="card.subtitle"
          :image="card.image"
        />
        <div class="flex justify-center mt-5">
          <img :src="triplDots" alt="" class="w-20" />
        </div>
      </div>
      <div class="mt-5 flex flex-col">
        <img :src="slide" alt="" />
      </div>
      <img :src="triplDots" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
