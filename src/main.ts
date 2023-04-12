import { createApp } from 'vue'
import router from "./routes/index"; 
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '../src/style/index.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

import App from './App.vue'

app.use(router).mount('#app')
