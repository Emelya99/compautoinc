import productsApi from '@/api/products';

const state = {
  data: [],
  isLoading: false,
  isNextPage: null,
  error: null,
};

export const mutationTypes = {
  // First Request
  getSearchStart: '[search dropdown] getSearchStart',
  getSearchSuccess: '[search dropdown] getSearchSuccess',
  getSearchFailure: '[search dropdown] getSearchFailure',

  // Load More
  getLoadMoreSearchStart: '[search dropdown] getLoadMoreSearchStart',
  getLoadMoreSearchSuccess: '[search dropdown] getLoadMoreSearchSuccess',
  getLoadMoreSearchFailure: '[search dropdown] getLoadMoreSearchFailure',
};

export const actionTypes = {
    getSearch: '[search dropdown] getSearch',
    getLoadMoreSearch: '[search dropdown] getLoadMoreSearch',
};

const mutations = {
  // First Request
  [mutationTypes.getSearchStart](state) {
    state.isLoading = true;
    state.isNextPage = null;
    state.data = [];
    state.error = null;
  },
  [mutationTypes.getSearchSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload.results;
    state.isNextPage = Boolean(payload.next);
  },
  [mutationTypes.getSearchFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },

  // Load More
  [mutationTypes.getLoadMoreSearchStart](state) {
    state.isLoading = true;
    state.isNextPage = null;
    state.error = null;
  },
  [mutationTypes.getLoadMoreSearchSuccess](state, payload) {
    state.isLoading = false;
    state.data = [...state.data, ...payload.results];
    state.isNextPage = Boolean(payload.next);
  },
  [mutationTypes.getLoadMoreSearchFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  // First Request
  [actionTypes.getSearch](context, { currentUserInput, page, countPage }) {
    const userText = currentUserInput.split(" ").join("-");
    return new Promise((resolve) => {
      context.commit(mutationTypes.getSearchStart);
      productsApi
        .getSearchProducts(userText, page, countPage)
        .then((data) => {
          context.commit(mutationTypes.getSearchSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getSearchFailure, error.message);
        });
    });
  },

  // Load More
  [actionTypes.getLoadMoreSearch](context, { currentUserInput, page, countPage }) {
    const userText = currentUserInput.split(" ").join("-");
    return new Promise((resolve) => {
      context.commit(mutationTypes.getLoadMoreSearchStart);
      productsApi
        .getSearchProducts(userText, page, countPage)
        .then((data) => {
          context.commit(mutationTypes.getLoadMoreSearchSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getLoadMoreSearchFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
