import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  //This lets us controll scroll behavior. 
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }
    //Checks if hash value is set '#100' wich scrolls user down.
    if(to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 0};
  }
});

//Execute this before each routing action.
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  //next('/') or next(false) is also possible.
  next();
});

//Routes are registered
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
