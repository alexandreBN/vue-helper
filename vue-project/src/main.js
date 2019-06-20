import Vue from 'vue'
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router';
import { routes } from './routes';
import 'vue-material/dist/vue-material.min.css'

import App from './App.vue';

Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
