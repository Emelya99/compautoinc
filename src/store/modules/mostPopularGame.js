import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getMostPopularGameStart: '[most popular game] getMostPopularGameStart',
  getMostPopularGameSuccess: '[most popular game] getMostPopularGameSuccess',
  getMostPopularGameFailure: '[most popular game] getMostPopularGameFailure',
};

export const actionTypes = {
  getMostPopularGame: '[most popular game] getMostPopularGame',
};

const mutations = {
  [mutationTypes.getMostPopularGameStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getMostPopularGameSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getMostPopularGameFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getMostPopularGame](context) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getMostPopularGameStart);
      productsApi
        .getMostPopularGame()
        .then((data) => {
          context.commit(mutationTypes.getMostPopularGameSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getMostPopularGameFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
