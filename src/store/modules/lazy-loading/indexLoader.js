const state = {
    totalSections: 5,
    visibleSectionIndex: 0,
};

export const mutationTypes = {
    updateVisibleSectionIndex: '[index lazy loader] updateVisibleSectionIndex',
};

const mutations = {
  [mutationTypes.updateVisibleSectionIndex](state, payload) {
    state.visibleSectionIndex = payload;
  },
};

export default {
  state,
  mutations,
};
