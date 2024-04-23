import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getUpcomingReviewsStart: '[upcoming reviews] getUpcomingReviewsStart',
  getUpcomingReviewsSuccess: '[upcoming reviews] getUpcomingReviewsSuccess',
  getUpcomingReviewsFailure: '[upcoming reviews] getUpcomingReviewsFailure',
};

export const actionTypes = {
  getUpcomingReviews: '[upcoming reviews] getUpcomingReviews',
};

const mutations = {
  [mutationTypes.getUpcomingReviewsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getUpcomingReviewsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getUpcomingReviewsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getUpcomingReviews](context, { pageSize }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getUpcomingReviewsStart);
      productsApi
        .getUpcomingReviews(pageSize)
        .then((data) => {
          context.commit(mutationTypes.getUpcomingReviewsSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getUpcomingReviewsFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
