import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vue3Lottie from 'vue3-lottie'
import vue3lottie from 'vue3-lottie'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(vue3lottie)

app.mount('#app')
