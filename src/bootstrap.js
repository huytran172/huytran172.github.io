import Vue from 'vue';
import VueRouter from 'vue-router';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';
Vue.component('icon', Icon);

window.Vue = Vue;
Vue.use(VueRouter);