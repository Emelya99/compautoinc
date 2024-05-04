import Vue from 'vue';
import Vuex from 'vuex';

/* Products */
import welcomeReviews from "@/store/modules/products/welcomeReviews";
import latestReviews from "@/store/modules/products/latestReviews";
import popularReviews from "@/store/modules/products/popularReviews";
import mostPopularGame from "@/store/modules/products/mostPopularGame";
import upcomingReviews from "@/store/modules/products/upcomingReviews";
import bestGamesByPlatform from "@/store/modules/products/bestGamesByPlatform";
import bestGamesByGenre from "@/store/modules/products/bestGamesByGenre";
import searchDropdown from "@/store/modules/products/searchDropdown";
import searchPage from "@/store/modules/products/searchPage";
import productItem from "@/store/modules/products/productPage/productItem";
import gameSeries from "@/store/modules/products/productPage/gameSeries";
import popularReviewsBlock from "@/store/modules/products/productPage/popularReviewsBlock";
import screensBlock from "@/store/modules/products/productPage/screensBlock";
import getButtons from "@/store/modules/products/productPage/getButtons";
import commentsBlock from "@/store/modules/products/productPage/commentsBlock";

/* Platforms */
import parentPlatforms from "@/store/modules/platforms/parentPlatforms";
import allPlatforms from "@/store/modules/platforms/allPlatforms";
import singlePlatform from "@/store/modules/platforms/singlePlatform";

/* Genres */
import genres from "@/store/modules/genres/genres";
import singleGenre from "@/store/modules/genres/singleGenre";

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
    mostPopularGame,
    upcomingReviews,
    bestGamesByPlatform,
    bestGamesByGenre,
    searchDropdown,
    searchPage,
    productItem,
    gameSeries,
    popularReviewsBlock,
    screensBlock,
    getButtons,
    commentsBlock,
    parentPlatforms,
    allPlatforms,
    singlePlatform,
    genres,
    singleGenre,
  },
});
