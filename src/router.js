import Vue from 'vue'
import Router from 'vue-router'
import Products from '#/pages/Products'
import Contact from '#/pages/Contact'
import Article from '#/pages/Article'
import About from '#/pages/About'

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
            path: '/article',
            name: 'article',
            component: Article,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ],
})
