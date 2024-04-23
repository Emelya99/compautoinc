import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getBestGamesStart: '[best games by genre] getBestGamesStart',
  getBestGamesSuccess: '[best games by genre] getBestGamesSuccess',
  getBestGamesFailure: '[best games by genre] getBestGamesFailure',
};

export const actionTypes = {
  getBestGames: '[best games by genre] getBestGames',
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
  [actionTypes.getBestGames](context, { genreId, pageSize }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getBestGamesStart);
      productsApi
        .getBestGamesByGenre(genreId,pageSize)
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
