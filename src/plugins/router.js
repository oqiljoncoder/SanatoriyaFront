import {createRouter, createWebHistory} from "vue-router";

let isAdmin = () => JSON.parse(atob(localStorage.getItem('token').split('.')[1])).roles.includes('ROLE_ADMIN')
// const ifAuthorized = (to, from, next) => {
//     if (localStorage.getItem('token') !== null && isAdmin()) {
//         next()
//     } else {
//         next('/login')
//     }
// }



const routes = [
    {
        path: '/',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/leaders',
        component: () => import('@/pages/LeaderShipPage.vue')
    },
    {
        path: '/news',
        component: () => import('@/pages/NewsPage.vue')
    },
    {
        path: '/new-text/:id',
        component: () => import('@/pages/NewText.vue')
    },
    {
        path: '/about-me',
        component: () => import('@/pages/AboutMePage.vue')
    }
    ,
    {
        path: '/admin',
        component: () => import('@/pages/AdminPage.vue'),
        beforeEnter: (to, from, next) =>{
            console.log(isAdmin())
            if (isAdmin()){
                next()
            } else {
                next('/')
            }
        }
    }
    ,
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})