import Vue from 'vue';
import Vuex from 'vuex';

import welcomeReviews from "@/store/modules/welcomeReviews";
import latestReviews from "@/store/modules/latestReviews";
import popularReviews from "@/store/modules/popularReviews";
import allPlatforms from "@/store/modules/platforms/allPlatforms";
import parentPlatforms from "@/store/modules/platforms/parentPlatforms";
import singlePlatform from "@/store/modules/platforms/singlePlatform";
import mostPopularGame from "@/store/modules/mostPopularGame";
import upcomingReviews from "@/store/modules/upcomingReviews";
import genres from "@/store/modules/genres";
import singleGenre from "@/store/modules/genres/singleGenre";
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
    allPlatforms,
    parentPlatforms,
    singlePlatform,
    mostPopularGame,
    upcomingReviews,
    genres,
    singleGenre,
    search
  },
});
