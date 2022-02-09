import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'virtual:svg-icons-register';
import 'lib-flexible'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
