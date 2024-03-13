import genresApi from '@/api/genres';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getGenresStart: '[genres] getGenresStart',
  getGenresSuccess: '[genres] getGenresSuccess',
  getGenresFailure: '[genres] getGenresFailure',
};

export const actionTypes = {
  getGenres: '[genres] getGenres',
}

const mutations = {
  [mutationTypes.getGenresStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getGenresSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getGenresFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getGenres](context, { countPage }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getGenresStart);
      genresApi
        .getGenres(countPage)
        .then((data) => {
          context.commit(mutationTypes.getGenresSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getGenresFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
