import Vue from 'vue';
import Vuex from 'vuex';

import welcomeReviews from "@/store/modules/welcomeReviews";
import latestReviews from "@/store/modules/latestReviews";
import popularReviews from "@/store/modules/popularReviews";
import platforms from "@/store/modules/platforms";
import mostPopularGame from "@/store/modules/mostPopularGame";
import upcomingReviews from "@/store/modules/upcomingReviews";
import genres from "@/store/modules/genres";
import search from "@/store/modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    welcomeReviews,
    latestReviews,
    popularReviews,
    platforms,
    mostPopularGame,
    upcomingReviews,
    genres,
    search
  },
});
