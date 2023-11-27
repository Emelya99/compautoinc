import axios from '@/api/axios';

export const getGenres = (pageCount) => {
  return axios
    .get(`/genres?page_size=${pageCount}`)
    .then((response) => response.data.results);
};

export default {
    getGenres,
};
