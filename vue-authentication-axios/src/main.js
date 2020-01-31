import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

// Below we find global config for axios.
axios.defaults.baseURL = 'https://vuejs-guide-14be4.firebaseio.com/';
// axios.defaults.headers.common['Authorization'] = 'fasfdsa';
axios.defaults.headers.get['Accepts'] = 'application/json';

// Manipulation of request configuration
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log(config, 'request interceptor');
  return config;
});

// Manipulation of response configuration.
const resInterceptor = axios.interceptors.response.use(response => {
  console.log(response, 'Response interceptor');
  return response
})

// This ejects our intercepotrs and it's ejected before it's performed.
axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.request.eject(resInterceptor);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
