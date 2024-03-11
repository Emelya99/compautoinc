import axios from '@/api/axios';

const getGenres = (pageCount) => {
  return axios
    .get(`/genres?page_size=${pageCount}`)
    .then((response) => response.data.results);
};

const getSingleGenre = (slug) => {
  return axios
    .get(`/genres/${slug}`)
    .then((response => response.data))
}

export default {
    getGenres,
    getSingleGenre
};
