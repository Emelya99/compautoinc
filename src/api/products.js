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

export default {
  getLatestReviews,
  getPopularReviews,
  getUpcomingReviews,
  getMostPopularGame,
};
