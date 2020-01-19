import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.config.productionTip = false

//use tels vue to add a plugin to the core vue functionality.
Vue.use(VueResource);

//Central place to store url.
Vue.http.options.root = 'https://vuejs-guide-14be4.firebaseio.com/';

//We are intercepting all methods we are sending and chaning the method in case its a PUT
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    //Be CAREFUL here.. this will change all response requests
    response.json = () => { return { messages: response.body } }
  });
});

new Vue({
  render: h => h(App),
}).$mount('#app')
