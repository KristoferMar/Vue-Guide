import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

// const url = "https://icanhazdadjoke.com";
// const header = { Accept: "application/json" };

export default new Vuex.Store ({
    state: {
        currentJoke: "This is a joke",
        allJokes: []
    },
    mutations: {
        // Syncrous
        setCurrentJoke(state, payload) {
          state.currentJoke = payload;
          state.allJokes.push(payload);
        }
    },
    actions: {},
    modules: {},
    getters: {
        getCurrentJoke: state => state.currentJoke,
    },
});