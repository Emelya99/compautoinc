import axios from '@/api/axios';

export const getPlatforms = (pageCount) => {
  return axios
    .get(`/platforms/lists/parents?page_size=${pageCount}`)
    .then((response) => response.data.results);
};

export default {
  getPlatforms,
};
