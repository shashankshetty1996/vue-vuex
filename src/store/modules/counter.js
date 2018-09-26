import * as types from "../types";

const state = {
  counter: 0
};

const getters = {
  // doubleCounter: state => {
  //   return state.counter * 2;
  // },
  // stringCounter: state => {
  //   return state.counter + " clicks";
  // }
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [types.CLICK_COUNTER]: state => {
    return state.counter + " clicks";
  }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  // increment: context => {
  //   context.commit("increment");
  // },
  increment: ({ commit }, payload) => {
    commit("increment", payload);
  },
  decrement: ({ commit }, payload) => {
    commit("decrement", payload);
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit("increment", payload.by);
    }, payload.duration);
  },
  asyncDecrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit("decrement", payload.by);
    }, payload.duration);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
