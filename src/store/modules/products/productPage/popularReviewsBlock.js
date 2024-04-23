import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getPopularReviewsBlockStart: '[popular reviews block] getPopularReviewsBlockStart',
  getPopularReviewsBlockSuccess: '[popular reviews block] getPopularReviewsBlockSuccess',
  getPopularReviewsBlockFailure: '[popular reviews block] getPopularReviewsBlockFailure',
};

export const actionTypes = {
  getPopularReviewsBlock: '[popular reviews block] getPopularReviews',
};

const mutations = {
  [mutationTypes.getPopularReviewsBlockStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getPopularReviewsBlockSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getPopularReviewsBlockFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getPopularReviewsBlock](context, { pageSize, page }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getPopularReviewsBlockStart);
      productsApi
        .getPopularReviews(pageSize, page)
        .then((data) => {
          context.commit(mutationTypes.getPopularReviewsBlockSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getPopularReviewsBlockFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
