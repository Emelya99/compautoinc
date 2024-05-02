import productsApi from '@/api/products';

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getButtonsStart: '[get buttons] getButtonsStart',
  getButtonsSuccess: '[get buttons] getButtonsSuccess',
  getButtonsFailure: '[get buttons] getButtonsFailure',
};

export const actionTypes = {
  getButtons: '[get buttons] getButtons',
};

const mutations = {
  [mutationTypes.getButtonsStart](state) {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [mutationTypes.getButtonsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getButtonsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionTypes.getButtons](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getButtonsStart);
      productsApi
        .getStores(slug)
        .then((data) => {
          const storesWithName = context.rootState.productItem.data.stores;

          const objectById = [...data, ...storesWithName].reduce(
            (acc, obj) => {
              acc[obj.id] = acc[obj.id] || { id: obj.id };
              if (obj.url) {
                acc[obj.id].url = obj.url;
              }
              if (obj.store && obj.store.name) {
                acc[obj.id].name = obj.store.name;
              }
              return acc;
            },
            {}
          );

          const mergedArray = Object.values(objectById);

          context.commit(mutationTypes.getButtonsSuccess, mergedArray);
          resolve(data);
        })
        .catch((error) => {
          context.commit(mutationTypes.getButtonsFailure, error.message);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
