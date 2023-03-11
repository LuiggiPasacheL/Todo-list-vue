import Todos from './components/Todos.vue';
import Welcome from './components/Welcome.vue';

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import BootstrapVueNext from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const routes = [
    { path: '/', component: Welcome },
    { path: '/todos', component: Todos },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(BootstrapVueNext)
app.use(router)
app.mount('#app')
