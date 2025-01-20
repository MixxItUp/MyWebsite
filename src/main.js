import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// // 在生产环境中禁用 Devtools
// if (process.env.NODE_ENV === 'production') {
//   app.config.devtools = false;
// }

app.mount('#app')
