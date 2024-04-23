import platformsApi from '@/api/platforms';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getAllPlatformsStart: '[all platforms] getAllPlatformsStart',
  getAllPlatformsSuccess: '[all platforms] getAllPlatformsSuccess',
  getAllPlatformsFailure: '[all platforms] getAllPlatformsFailure',
};

export const actionTypes = {
  getAllPlatforms: '[all platforms] getAllPlatforms',
}

const mutations = {
  [mutationTypes.getAllPlatformsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getAllPlatformsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getAllPlatformsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getAllPlatforms](context, { pageSize }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getAllPlatformsStart);
      platformsApi
        .getAllPlatforms(pageSize)
        .then((data) => {
          context.commit(mutationTypes.getAllPlatformsSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getAllPlatformsFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
