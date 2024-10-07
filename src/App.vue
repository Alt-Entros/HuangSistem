<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import mainFooter from '@/components/mainFooter.vue'

const background = ref({
  background:
    'linear-gradient(180deg, #181313 0%, #1C1616 35%, #1F1919 67%, #2B2222 80%, #7E6565 100%)'
})

const route = useRoute()

const bg1Routes = ['/', '/device']
const bg2Routes = ['/catalog', '/setting', '/:id']

watch(route, (newRoute) => {
  if (bg1Routes.includes(newRoute.path)) {
    background.value.background =
      'linear-gradient(180deg, #181313 0%, #1C1616 35%, #1F1919 67%, #2B2222 80%, #7E6565 100%)'
  } else if (bg2Routes.includes(newRoute.path)) {
    background.value.background = 'linear-gradient(180deg, #181313 0%, #1D1717 77%, #231C1C 100%)'
  } else {
    background.value.background =
      'linear-gradient(180deg, #181313 0%, #1C1616 35%, #1F1919 67%, #2B2222 80%, #7E6565 100%)'
  }
})
</script>

<template>
  <div
    class="w-full min-h-screen font-inter flex flex-col items-center gap-2 transition-all duration-300"
    :style="background"
  >
    <router-view> </router-view>
    <div class="w-full mt-10 flex justify-center">
      <mainFooter class="fixed bottom-0" />
    </div>
  </div>
</template>

<style scoped></style>
