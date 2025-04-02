import "@/styles/element/common.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// import { getCategory } from "@/apis/testapi";

import '../font_4846324_lz5y1nj3bmd/iconfont.css'

// getCategory().then(res=>{
//     console.log(res.config);
    
// })

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.mount('#app')




