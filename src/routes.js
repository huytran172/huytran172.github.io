import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./pages/home/Home.vue')
    },
    {
        path: '/project',
        component: require('./pages/project/Project.vue')
    }
];

export default new VueRouter({
    routes
});