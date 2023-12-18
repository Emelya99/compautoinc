import axios from '@/api/axios';

const getSearchProducts = (currentUserInput, page) => {
  return axios
    .get(`/games?search_exact=true&search_precise=true&page_size=10&search=${currentUserInput}&ordering=-metacritic&page=${page}`)
    .then((response) => response.data);
};

export default {
  getSearchProducts,
};
