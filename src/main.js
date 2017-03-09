import './bootstrap.js';
import router from './routes';
import App from './App.vue';

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
