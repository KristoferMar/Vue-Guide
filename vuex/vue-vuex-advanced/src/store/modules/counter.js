import * as types from '../types'

const state = {
    counter: 0,

};

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks';
    },
};

const mutations = { 
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: state => {
        state.counter--;
    },
}

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }) => {
        commit('increment');
    },
    asyncIncrement: ({ commit }) => {
        setTimeout(() => {
            commit('increment')
        }, 1000);
    },
    asyncIncrement: ({ commit }) => {
        setTimeout(() => {
            commit('decrement')
        }, 1000);
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}