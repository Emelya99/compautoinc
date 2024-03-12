import axios from '@/api/axios';

const getGenres = (countPage) => {
  return axios
    .get(`/genres?page_size=${countPage}`)
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
