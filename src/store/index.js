import Vue from 'vue';
import Vuex from 'vuex';

import latestReviews from "@/store/modules/latestReviews";
import popularReviews from "@/store/modules/popularReviews";
import platforms from "@/store/modules/platforms";
import mostPopularGame from "@/store/modules/mostPopularGame";
import upcomingReviews from "@/store/modules/upcomingReviews";
import genres from "@/store/modules/genres";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    latestReviews,
    popularReviews,
    platforms,
    mostPopularGame,
    upcomingReviews,
    genres,
  },
});
