import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0,
  },
  // Getters which can be called with $store.
  getters,
  // Mutations are actions which mutate state
  mutations,
  actions,
  // All modules come from this file.
  modules: {
    counter,
  },
});
