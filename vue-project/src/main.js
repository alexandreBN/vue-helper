import Vue from 'vue'
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import App from './App.vue';

Vue.use(VueMaterial);
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
