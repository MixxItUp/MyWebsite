import './assets/main.css'
import { createApp } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.component('fa-icon',FontAwesomeIcon)

app.mount('#app')
