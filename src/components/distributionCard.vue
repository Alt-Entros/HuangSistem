<script setup>
import underStatus from '@/assets/img/home__page/status/back.svg'
const props = defineProps({
  title: String,
  description: String,
  status: String,
  imgBg: String,
  id: Number
})
</script>

<template>
  <router-link :to="{ name: 'moreInfo', params: { id: props.id } }">
    <div
      class="rounded-3xl p-5 flex flex-col bg-distributionCard bg-left bg-no-repeat"
      :class="imgBg"
    >
      <h1 class="text-white text-3xl">{{ props.title }}</h1>
      <p class="text-subtitle">{{ props.description }}</p>
      <div class="relative">
        <div class="absolute left-2 top-2" v-if="props.status == 'active'">
          <img src="@/assets/img/home__page/status/active.svg" alt="" />
          <h1 class="font-bold mt-3 absolute left-8 top-1">
            {{ $text.homePage.DistributionCardInfo.statusMessage.active }}
          </h1>
        </div>
        <div class="absolute left-2 top-2" v-else-if="props.status == 'problem'">
          <img src="@/assets/img/home__page/status/problem.svg" alt="" />
          <h1 class="font-bold mt-3 absolute left-8 top-1">
            {{ $text.homePage.DistributionCardInfo.statusMessage.problem }}
          </h1>
        </div>
        <div class="absolute left-2 top-2" v-else-if="props.status == 'notActive'">
          <img src="@/assets/img/home__page/status/notActive.svg" alt="" />
          <h1 class="font-bold mt-3 absolute left-8 top-1">
            {{ $text.homePage.DistributionCardInfo.statusMessage.notActive }}
          </h1>
        </div>
        <img :src="underStatus" alt="" class="w-30" />
      </div>
    </div>
  </router-link>
</template>

<style scoped></style>
