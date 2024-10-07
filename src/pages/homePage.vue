<script setup>
import { getCurrentInstance } from 'vue'
import mainHeader from '@/components/mainHeader.vue'
import distributionCard from '@/components/distributionCard.vue'
import sistemBtn from '@/components/sistemBtn.vue'

const { proxy } = getCurrentInstance()

const homePage = proxy.$text.homePage
</script>

<template>
  <div class="p-5 flex flex-col justify-center">
    <mainHeader :title="homePage.title" />
    <div class="flex flex-col gap-10">
      <distributionCard
        v-for="(card, index) in homePage.DistributionCardInfo.cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :status="card.status"
        :img-bg="card.imgBg"
        :id="Number(card.id)"
      />
    </div>
    <sistemBtn :title="homePage.btn" class="mt-20" />
  </div>
</template>

<style scoped></style>
