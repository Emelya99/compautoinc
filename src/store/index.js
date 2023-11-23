import Vue from 'vue';
import Vuex from 'vuex';

import latestReviews from "@/store/modules/latestReviews";
import popularReviews from "@/store/modules/popularReviews";
import upcomingReviews from "@/store/modules/upcomingReviews";
import platforms from "@/store/modules/platforms";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    latestReviews,
    popularReviews,
    upcomingReviews,
    platforms,
  },
});
