import axios from 'axios';

axios.defaults.baseURL = 'https://api.rawg.io/api';

axios.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: '079507180c7846d9a39dcdcd3d3cb26c',
  };
  return config;
});

export default axios;
