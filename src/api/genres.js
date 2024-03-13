import axios from '@/api/axios';

const getGenres = () => {
  return axios
    .get(`/genres?ordering=-games_count`)
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
