import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import router from './router/index.js'

const app = createApp(App)

app.use(createPinia()) // Usa Pinia primero
app.use(BootstrapVue3) // Usa BootstrapVue 3
app.use(router) // Añade el enrutador aquí
app.mount('#app')
