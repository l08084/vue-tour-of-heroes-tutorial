import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../components/pages/Dashboard'
import Heroes from '../components/pages/Heroes'
import HeroDetail from '../components/pages/HeroDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/heroes',
            component: Heroes
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/detail/:id',
            name: 'Detail',
            component: HeroDetail
        }
    ]
})