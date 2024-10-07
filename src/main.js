import './assets/main.css'
import text from '@/assets/text'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$text = text
app.use(createPinia())
app.use(router)

app.mount('#app')
