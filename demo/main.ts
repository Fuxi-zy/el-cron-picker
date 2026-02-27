import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 引入组件
import { ElCronPicker, ElCronConfig } from '../src'

const app = createApp(App)
app.use(ElementPlus)
app.component('ElCronPicker', ElCronPicker)
app.component('ElCronConfig', ElCronConfig)
app.mount('#app')