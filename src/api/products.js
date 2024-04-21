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
    .get(`/games/the-elder-scrolls-v-skyrim`)
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

const getBestGamesByGenre = (genreId, countPage) => {
  return axios
    .get(`/games?genres=${genreId}&ordering=-metarating&page_size=${countPage}`)
    .then((response => response.data.results))
}

const getSearchProducts = (currentUserInput, page, countPage) => {
  return axios
    .get(`/games?search_exact=true&search_precise=true&page_size=${countPage}&search=${currentUserInput}&ordering=-rating&page=${page}`)
    .then((response) => response.data);
};

const getSingleGame = (slug) => {
  return axios
    .get(`/games/${slug}`)
    .then((response) => response.data);
}

const getGameSeries = (slug, pageSize) => {
  return axios
    .get(`/games/${slug}/game-series?page_size=${pageSize}`)
    .then((response) => response.data.results);
}

export default {
  getLatestReviews,
  getPopularReviews,
  getUpcomingReviews,
  getMostPopularGame,
  getBestGamesByPlatform,
  getBestGamesByGenre,
  getSearchProducts,
  getSingleGame,
  getGameSeries,
};
