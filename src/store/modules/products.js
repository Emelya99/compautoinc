import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getLatestReviewsStart: '[products] getLatestReviewsStart',
  getLatestReviewsSuccess: '[products] getLatestReviewsSuccess',
  getLatestReviewsFailure: '[products] getLatestReviewsFailure',
};

export const actionTypes = {
  getLatestReviews: '[products] getLatestReviews',
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
  [actionTypes.getLatestReviews](context, { countPage }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getLatestReviewsStart);
      productsApi
        .getLatestReviews(countPage)
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
