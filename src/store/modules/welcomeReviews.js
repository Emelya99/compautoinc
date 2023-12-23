import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getWelcomeReviewsStart: '[welcome reviews] getWelcomeReviewsStart',
  getWelcomeReviewsSuccess: '[welcome reviews] getWelcomeReviewsSuccess',
  getWelcomeReviewsFailure: '[welcome reviews] getWelcomeReviewsFailure',
};

export const actionTypes = {
  getWelcomeReviews: '[welcome reviews] getWelcomeReviews',
};

const mutations = {
  [mutationTypes.getWelcomeReviewsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getWelcomeReviewsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getWelcomeReviewsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getWelcomeReviews](context, { countPage, page }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getWelcomeReviewsStart);
      productsApi
        .getPopularReviews(countPage, page)
        .then((data) => {
          context.commit(mutationTypes.getWelcomeReviewsSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getWelcomeReviewsFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
