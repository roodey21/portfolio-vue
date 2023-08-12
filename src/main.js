import './assets/style.css'
import './assets/layouting.css'

import 'material-icons/iconfont/material-icons.css'

import { inject } from '@vercel/analytics'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
inject()
app.use(createPinia())
app.use(router)

app.mount('#app')
