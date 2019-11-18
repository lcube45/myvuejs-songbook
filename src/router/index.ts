import Vue from 'vue';
import VueRouter from 'vue-router';
import Songs from '../views/Songs.vue';
import store from '../store/index';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/songs',
        name: 'songs',
        component: () =>
            import(/* webpackChunkName: "songs" */ '../views/Songs.vue')
    },
    {
        path: '/artists',
        name: 'artists',
        component: () =>
            import(/* webpackChunkName: "artists" */ '../views/Artists.vue'),
        meta: {
            authRequired: true
        }
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
                path: '/'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
