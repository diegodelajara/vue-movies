import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import http from './plugins/axios'
import { store } from './store'
import { routes } from "./routes";



Vue.use(VueRouter)
Vue.use(http)
Vue.config.productionTip = false


const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  vuetify,
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
