import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from '~pages'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './style.css'

const router = createRouter({
  routes,
  history: createWebHistory(),
})

console.log('routes', routes)
console.log('router', router)

createApp(App).use(router).mount('#app')
