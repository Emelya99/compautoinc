import productsApi from '@/api/products';

const state = {
  data: [],
  isLoading: false,
  error: null,
};

export const mutationTypes = {
    getSearchStart: '[search page] getSearchStart',
    getSearchSuccess: '[search page] getSearchSuccess',
    getSearchFailure: '[search page] getSearchFailure',
};

export const actionTypes = {
    getSearch: '[search page] getSearch',
};

const mutations = {
    [mutationTypes.getSearchStart](state) {
      state.isLoading = true;
      state.data = [];
      state.error = null;
    },
    [mutationTypes.getSearchSuccess](state, payload) {
      state.isLoading = false;
      state.data = payload;
    },
    [mutationTypes.getSearchFailure](state, payload) {
      state.isLoading = false;
      state.error = payload;
    },
};

const actions = {
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
};

export default {
    state,
    mutations,
    actions,
};