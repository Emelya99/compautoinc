import platformsApi from '@/api/platforms';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getParentPlatformsStart: '[parent platforms] getParentPlatformsStart',
  getParentPlatformsSuccess: '[parent platforms] getParentPlatformsSuccess',
  getParentPlatformsFailure: '[parent platforms] getParentPlatformsFailure',
};

export const actionTypes = {
  getParentPlatforms: '[parent platforms] getParentPlatforms',
}

const mutations = {
  [mutationTypes.getParentPlatformsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getParentPlatformsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getParentPlatformsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getParentPlatforms](context, { countPage, page }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getParentPlatformsStart);
      platformsApi
        .getParentPlatforms(countPage, page)
        .then((response) => {
          context.commit(mutationTypes.getParentPlatformsSuccess, response.data);
          resolve(response.data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getParentPlatformsFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
