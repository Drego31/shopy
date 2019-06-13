import Vue from 'vue'
import Router from 'vue-router'
import Products from '#/pages/Products'
import Skicams from '#/pages/Skicams'
import Contact from '#/pages/Contact'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'products',
            component: Products,
        },
        {
            path: '/about',
            name: 'about',
            component: Skicams,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ],
})
