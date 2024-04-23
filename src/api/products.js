import axios from '@/api/axios';

const getLatestReviews = (pageSize) => {
  return axios
    .get(`/games?page_size=${pageSize}&ordering=-updated`)
    .then((response) => response.data.results);
};

const getPopularReviews = (pageSize, page) => {
  return axios
    .get(`/games?page_size=${pageSize}&page=${page}&ordering=-metarating`)
    .then((response) => response.data.results);
};

const getMostPopularGame = () => {
  return axios
    .get(`/games/the-elder-scrolls-v-skyrim`)
    .then((response) => response.data);
};

const getUpcomingReviews = (pageSize) => {
  return axios
    .get(`/games?page_size=${pageSize}&ordering=-released`)
    .then((response) => response.data.results);
};

const getBestGamesByPlatform = (platformId, pageSize) => {
  return axios
    .get(`/games?platforms=${platformId}&ordering=-metarating&page_size=${pageSize}`)
    .then((response => response.data.results))
}

const getBestGamesByGenre = (genreId, pageSize) => {
  return axios
    .get(`/games?genres=${genreId}&ordering=-metarating&page_size=${pageSize}`)
    .then((response => response.data.results))
}

const getSearchProducts = (currentUserInput, page, pageSize) => {
  return axios
    .get(`/games?search_exact=true&search_precise=true&page_size=${pageSize}&search=${currentUserInput}&ordering=-rating&page=${page}`)
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

const getScreenshots = (slug) => {
  return axios
    .get(`/games/${slug}/screenshots`)
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
  getScreenshots,
};
