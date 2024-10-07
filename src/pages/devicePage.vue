<script setup>
import { getCurrentInstance } from 'vue'
import mainHeader from '@/components/mainHeader.vue'
import deviceCard from '@/components/deviceCard.vue'
import sistemBtn from '@/components/sistemBtn.vue'
import triplDots from '@/assets/img/devices/triplDots.svg'

const { proxy } = getCurrentInstance()

const devicePage = proxy.$text.devicePage
</script>

<template>
  <div class="p-5 flex flex-col">
    <mainHeader :title="devicePage.title" :subtitle="devicePage.subtitle" />
    <div class="p-1 grid grid-cols-2 gap-5">
      <deviceCard
        v-for="(card, index) in devicePage.deviceCardInfo.cards"
        :key="index"
        :title="card.title"
        :subtitle="card.subtitle"
        :status="card.status"
        :image="card.image"
      />
    </div>
    <div class="flex justify-center mt-5">
      <img :src="triplDots" alt="" class="w-20" />
    </div>
    <sistemBtn :title="devicePage.btn" class="mt-10" />
  </div>
</template>

<style scoped></style>
