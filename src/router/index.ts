import Vue from 'vue';
import VueRouter from 'vue-router';
import Songs from '../views/Songs.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'songs',
        component: Songs,
        meta: {
            authRequired: true
        }
    },
    {
        path: '/artists',
        name: 'artists',
        component: () =>
            import(/* webpackChunkName: "artists" */ '../views/Artists.vue'),
        meta: {
            authRequired: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import(/* webpackChunkName: "artists" */ '../views/Login.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (!store.state.isAuthenticated) {
            next({
                path: '/login'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
