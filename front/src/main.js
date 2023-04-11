import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// import router from './router'

import './assets/main.css'

import HomeView from './views/HomeView.vue'
import SignupView from './views/SignupView.vue'
import SigninView from './views/SigninView.vue'
import AppView from './views/AppView.vue'
const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'Home', path: '/', component: HomeView },
        { name: 'SignUp', path: '/signup', component: SignupView },
        { name: 'SignIn', path: '/signin', component: SigninView },
        { name: 'AppView', path: '/app', component: AppView },
    ]
});

app.use(router)

app.mount('#app')