import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getCommentsStart: '[comments] getCommentsStart',
  getCommentsSuccess: '[comments] getCommentsSuccess',
  getCommentsFailure: '[comments] getCommentsFailure',
};

export const actionTypes = {
  getComments: '[comments] getScreenss',
};

const mutations = {
  [mutationTypes.getCommentsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getCommentsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getCommentsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getComments](context, { slug, pageSize }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getCommentsStart);
      productsApi
        .getComments(slug, pageSize)
        .then((data) => {
          context.commit(mutationTypes.getCommentsSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getCommentsFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
