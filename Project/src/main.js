import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes'
import store from './store/store';
import VueResource from 'vue-resource';

Vue.use(VueRouter); // To route
Vue.use(VueResource); // To send requests 

Vue.http.options.root = 'https://vuejs-guide-14be4.firebaseio.com/';

// Global filter for multiple components
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
