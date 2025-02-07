import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'

import { isPhone } from "./utils/index.js";

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import zhCn from 'element-plus/es/locale/lang/zh-cn';

import * as ElIcons from '@element-plus/icons-vue'
const app = createApp(App)

for (const name in ElIcons) {
    app.component(name, ElIcons[name])
}

// 判断手机或者电脑
window.$isPhone = isPhone()

app.use(ElementPlus, {
    locale: zhCn,
});

app.use(router)

app.mount('#app')
