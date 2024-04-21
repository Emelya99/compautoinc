import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getSingleProductStart: '[single product] getSingleProductStart',
  getSingleProductSuccess: '[single product] getSingleProductSuccess',
  getSingleProductFailure: '[single product] getSingleProductFailure',
};

export const actionTypes = {
  getSingleProduct: '[single product] getSingleProduct',
};

const mutations = {
  [mutationTypes.getSingleProductStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getSingleProductSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getSingleProductFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getSingleProduct](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getSingleProductStart);
      productsApi
        .getSingleGame(slug)
        .then((data) => {
          context.commit(mutationTypes.getSingleProductSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getSingleProductFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
