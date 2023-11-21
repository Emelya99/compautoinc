import platformsApi from '@/api/platforms';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getPlatformsStart: '[platforms] getPlatformsStart',
  getPlatformsSuccess: '[platforms] getPlatformsSuccess',
  getPlatformsFailure: '[platforms] getPlatformsFailure',
};

export const actionTypes = {
  getPlatforms: '[platforms] getPlatforms',
}

const mutations = {
  [mutationTypes.getPlatformsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getPlatformsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getPlatformsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getPlatforms](context, { countPage }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getPlatformsStart);
      platformsApi
        .getPlatforms(countPage)
        .then((data) => {
          context.commit(mutationTypes.getPlatformsSuccess, data);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getPlatformsFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
