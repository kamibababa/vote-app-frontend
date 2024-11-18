import { createApp } from 'vue'
import '@/main.css'
import App from '@/App.vue'
import router from '@/router'
import { createPinia }  from 'pinia'
import {getUser} from '@/utils/storage'
import { useUserStore } from '@/store/user'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)

app.use(createPinia())
app.use(router)

let {setUserInfo} = useUserStore()
if(getUser()){
  setUserInfo(getUser())
}

app.mount('#app')
