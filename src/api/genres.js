import axios from '@/api/axios';

const getGenres = (pageCount) => {
  return axios
    .get(`/genres?page_size=${pageCount}`)
    .then((response) => response.data.results);
};

export default {
    getGenres,
};
