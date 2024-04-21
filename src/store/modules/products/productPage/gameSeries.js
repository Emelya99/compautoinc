import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getGameSeriesStart: '[game series] getGameSeriesStart',
  getGameSeriesSuccess: '[game series] getGameSeriesSuccess',
  getGameSeriesFailure: '[game series] getGameSeriesFailure',
};

export const actionTypes = {
  getGameSeries: '[game series] getGameSeries',
};

const mutations = {
  [mutationTypes.getGameSeriesStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getGameSeriesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getGameSeriesFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getGameSeries](context, { slug, pageSize }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getGameSeriesStart);
      productsApi
        .getGameSeries(slug, pageSize)
        .then((data) => {
          context.commit(mutationTypes.getGameSeriesSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getGameSeriesFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
