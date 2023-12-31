import axios from '@/api/axios';

export const getPlatforms = (pageCount) => {
  return axios
    .get(`/platforms?page_size=${pageCount}`)
    .then((response) => response.data.results);
};

export default {
  getPlatforms,
};
