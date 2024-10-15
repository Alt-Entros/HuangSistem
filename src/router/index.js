import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/pages/homePage.vue'
import devicePage from '@/pages/devicePage.vue'
import catalogPage from '@/pages/catalogPage.vue'
import settingPage from '@/pages/settingPage.vue'
import moreInfo from '@/pages/moreInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/more-info/:id',
      name: 'moreInfo',
      component: moreInfo,
      props: true
    },
    {
      path: '/device',
      name: 'devicePage',
      component: devicePage
    },
    {
      path: '/catalog',
      name: 'catalogPage',
      component: catalogPage
    },
    {
      path: '/setting',
      name: 'settingPage',
      component: settingPage
    }
  ]
})

export default router
