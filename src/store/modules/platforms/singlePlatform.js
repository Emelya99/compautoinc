import platformsApi from '@/api/platforms';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getSinglePlatformStart: '[single platform] getSinglePlatformStart',
  getSinglePlatformSuccess: '[single platform] getSinglePlatformSuccess',
  getSinglePlatformFailure: '[single platform] getSinglePlatformFailure',
};

export const actionTypes = {
  getSinglePlatform: '[single platform] getSinglePlatform',
};

const mutations = {
  [mutationTypes.getSinglePlatformStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getSinglePlatformSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getSinglePlatformFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getSinglePlatform](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getSinglePlatformStart);
      platformsApi
        .getSinglePlatform(slug)
        .then((data) => {
          context.commit(mutationTypes.getSinglePlatformSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getSinglePlatformFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
