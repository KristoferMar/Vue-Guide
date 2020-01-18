import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//First argument is the directive name : v-highlight
//Secont is the configuration for the directive
Vue.directive('highlight', {
  //Binding is the value we set outside ="'binding value'"
  bind(el, binding) {
    // el.style.backgroundColor = 'green'; 
    // el.style.backgroundColor = binding.value;

    //Down below we are handling arguments
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
  //Delayed is an cumstom modifier which we use in App.vue.
});

//Directive Hooks

new Vue({
  render: h => h(App),
}).$mount('#app')
