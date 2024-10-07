<script setup>
import { getCurrentInstance } from 'vue'
import avatar from '@/assets/img/Base__elements/Main__avatar.png'
import avatar2 from '@/assets/img/setting/avatar-2.svg'
import avatar3 from '@/assets/img/setting/avatar-3.svg'
import scenarioCard from '@/components/scenarioCard.vue'
const { proxy } = getCurrentInstance()

const settingPage = proxy.$text.settingPage
</script>

<template>
  <div class="w-full h-screen bg-settingBack flex flex-col">
    <div class="p-5 w-full flex flex-col gap-8">
      <h1 class="font-medium text-3xl text-white">{{ settingPage.title }}</h1>
      <p class="text-subtitle">{{ settingPage.subtitle }}</p>
    </div>
    <div class="flex justify-center gap-5 mt-28 items-baseline">
      <img :src="avatar2" alt="" class="w-20" />
      <div class="flex flex-col justify-center items-center gap-4 text-xl">
        <img :src="avatar" alt="" class="w-36" />
        <h1 class="text-white font-bold uppercase">{{ settingPage.avatarTitle }}</h1>
      </div>
      <img :src="avatar3" alt="" class="w-20" />
    </div>
    <div class="p-5 flex flex-col gap-5">
      <scenarioCard
        v-for="(card, index) in settingPage.settingInfo.cards"
        :key="index"
        :title="card.title"
        :subtitle="card.subtitle"
        :image="card.image"
      />
    </div>
  </div>
</template>

<style scoped></style>
