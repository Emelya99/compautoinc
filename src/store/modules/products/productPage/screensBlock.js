import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getScreensStart: '[screens] getScreensStart',
  getScreensSuccess: '[screens] getScreensSuccess',
  getScreensFailure: '[screens] getScreensFailure',
};

export const actionTypes = {
  getScreens: '[screens] getScreenss',
};

const mutations = {
  [mutationTypes.getScreensStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getScreensSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getScreensFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getScreens](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getScreensStart);
      productsApi
        .getScreenshots(slug)
        .then((data) => {
          context.commit(mutationTypes.getScreensSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getScreensFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
