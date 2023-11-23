import axios from '@/api/axios';

const getLatestReviews = (countPage) => {
  return axios
    .get(`/games?page_size=${countPage}&ordering=released`)
    .then((response) => response.data.results);
};

const getPopularReviews = (countPage, page) => {
  return axios
    .get(`/games?page_size=${countPage}&page=${page}&ordering=-rating`)
    .then((response) => response.data.results);
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
};
