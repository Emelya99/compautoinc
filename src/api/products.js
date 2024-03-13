import axios from '@/api/axios';

const getLatestReviews = (countPage) => {
  return axios
    .get(`/games?page_size=${countPage}&ordering=-updated`)
    .then((response) => response.data.results);
};

const getPopularReviews = (countPage, page) => {
  return axios
    .get(`/games?page_size=${countPage}&page=${page}&ordering=-metarating`)
    .then((response) => response.data.results);
};

const getMostPopularGame = () => {
  return axios
    .get(`/games/red-dead-redemption-2`)
    .then((response) => response.data);
};

const getUpcomingReviews = (countPage) => {
  return axios
    .get(`/games?page_size=${countPage}&ordering=-released`)
    .then((response) => response.data.results);
};

const getBestGamesByPlatform = (platformId, countPage) => {
  return axios
    .get(`/games?platforms=${platformId}&ordering=-metarating&page_size=${countPage}`)
    .then((response => response.data.results))
}

const getSearchProducts = (currentUserInput, page) => {
  return axios
    .get(`/games?search_exact=true&search_precise=true&page_size=10&search=${currentUserInput}&ordering=-rating&page=${page}`)
    .then((response) => response.data);
};

export default {
  getLatestReviews,
  getPopularReviews,
  getUpcomingReviews,
  getMostPopularGame,
  getBestGamesByPlatform,
  getSearchProducts,
};
