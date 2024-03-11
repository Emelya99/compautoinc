import genresApi from '@/api/genres';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getSingleGenreStart: '[single genre] getSingleGenreStart',
  getSingleGenreSuccess: '[single genre] getSingleGenreSuccess',
  getSingleGenreFailure: '[single genre] getSingleGenreFailure',
};

export const actionTypes = {
  getSingleGenre: '[single genre] getSingleGenre',
};

const mutations = {
  [mutationTypes.getSingleGenreStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getSingleGenreSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getSingleGenreFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getSingleGenre](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getSingleGenreStart);
      genresApi
        .getSingleGenre(slug)
        .then((data) => {
          context.commit(mutationTypes.getSingleGenreSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getSingleGenreFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
