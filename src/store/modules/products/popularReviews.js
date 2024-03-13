import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getPopularReviewsStart: '[popular reviews] getPopularReviewsStart',
  getPopularReviewsSuccess: '[popular reviews] getPopularReviewsSuccess',
  getPopularReviewsFailure: '[popular reviews] getPopularReviewsFailure',
};

export const actionTypes = {
  getPopularReviews: '[popular reviews] getPopularReviews',
};

const mutations = {
  [mutationTypes.getPopularReviewsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getPopularReviewsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getPopularReviewsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getPopularReviews](context, { countPage, page }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getPopularReviewsStart);
      productsApi
        .getPopularReviews(countPage, page)
        .then((data) => {
          context.commit(mutationTypes.getPopularReviewsSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getPopularReviewsFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
