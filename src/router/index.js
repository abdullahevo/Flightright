import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/form'
import thank from "../views/thankYou"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/thankYou",
        name: "thank",
        component: thank
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router