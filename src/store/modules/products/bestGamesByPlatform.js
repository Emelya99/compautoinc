import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getBestGamesStart: '[best games by platform] getBestGamesStart',
  getBestGamesSuccess: '[best games by platform] getBestGamesSuccess',
  getBestGamesFailure: '[best games by platform] getBestGamesFailure',
};

export const actionTypes = {
  getBestGames: '[best games by platform] getBestGames',
};

const mutations = {
  [mutationTypes.getBestGamesStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getBestGamesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getBestGamesFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getBestGames](context, { platformId, countPage }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getBestGamesStart);
      productsApi
        .getBestGamesByPlatform(platformId,countPage)
        .then((data) => {
          context.commit(mutationTypes.getBestGamesSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getBestGamesFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
