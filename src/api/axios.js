import axios from 'axios';

axios.defaults.baseURL = 'https://api.rawg.io/api';

axios.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: process.env.VUE_APP_RAWG_API_KEY,
  };
  return config;
});

export default axios;
