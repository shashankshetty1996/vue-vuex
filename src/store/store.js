import Vue from "vue";
import Vuex from "vuex";

import counter from "./modules/counter";

import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  // getters: {
  //   value: state => {
  //     return state.value;
  //   }
  // },
  // // Mutations should be always sync process
  // mutations: {
  //   updateValue: (state, payload) => {
  //     state.value = payload;
  //   }
  // },
  // actions: {
  //   // updateValue: ({ commit }, payload) => {
  //   //   commit("updateValue", payload);
  //   // }
  //   updateValue({ commit }, payload) {
  //     commit("updateValue", payload);
  //   }
  // },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    counter: counter
  }
});
