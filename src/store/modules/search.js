import searchApi from '@/api/search';

const state = {
  data: [],
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getSearchStart: '[search] getSearchStart',
  getSearchSuccess: '[search] getSearchSuccess',
  getSearchFailure: '[search] getSearchFailure',
};

export const actionTypes = {
    getSearch: '[search] getSearch',
};

const mutations = {
  [mutationTypes.getSearchStart](state) {
    state.isLoading = true;
    state.data = [];
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
  [actionTypes.getSearch](context, { currentUserInput }) {
    const userText = currentUserInput.split(" ").join("-");
    return new Promise((resolve) => {
      context.commit(mutationTypes.getSearchStart);
      searchApi
        .getSearchProducts(userText)
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
