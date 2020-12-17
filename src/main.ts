import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Gao from './components/Gao.vue'
import Gao2 from './components/Gao2.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history, routes: [
    { path: '/', component: Gao },
    { path: '/xxx', component: Gao2 }
  ]
})
const app = createApp(App)
app.use(router)
app.mount("#app")