import axios from '@/api/axios';

const getSearchProducts = (currentUserInput) => {
  return axios
    .get(`/games?search_exact=true&search_precise=true&page_size=10&search=${currentUserInput}&ordering=-metacritic`)
    .then((response) => response.data.results);
};

export default {
  getSearchProducts,
};
