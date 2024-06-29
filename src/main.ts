import { createApp } from 'vue'
import App from './App.vue'
import {setupRouter} from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import { createPinia } from 'pinia'


const app = createApp(App)
app.use(Antd)
app.use(createPinia())

await setupRouter(app);
app.mount('#app')