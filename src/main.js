import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import vuetify from './plugins/vuetify';


import Login from './pages/Login';
import Home from './pages/Home'


Vue.use(VueRouter);
Vue.config.productionTip = false


const router = new VueRouter({
  routes: [
     {
        path: '/',
        component: Login,
     },
     {
        path: '/home',
        component: Home,
     }
  ],
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
