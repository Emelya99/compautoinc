import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getLatestReviewsStart: '[latest reviews] getLatestReviewsStart',
  getLatestReviewsSuccess: '[latest reviews] getLatestReviewsSuccess',
  getLatestReviewsFailure: '[latest reviews] getLatestReviewsFailure',
};

export const actionTypes = {
  getLatestReviews: '[latest reviews] getLatestReviews',
};

const mutations = {
  [mutationTypes.getLatestReviewsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getLatestReviewsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getLatestReviewsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getLatestReviews](context, { pageSize }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getLatestReviewsStart);
      productsApi
        .getLatestReviews(pageSize)
        .then((data) => {
          context.commit(mutationTypes.getLatestReviewsSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getLatestReviewsFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
