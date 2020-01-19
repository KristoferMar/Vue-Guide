import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//This is a global filter function which is accessable in all components
Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

//This is mixed in to every single instance. Global instance
Vue.mixin({
  created() {
    // eslint-disable-next-line no-console
    console.log('Global Mixin - Created hook');
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
