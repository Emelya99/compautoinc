import axios from '@/api/axios';

const getLatestReviews = (pageCount) => {
  return axios.get(`/games?page_size=${pageCount}&ordering=released`).then((response) => response.data.results);
};

const getUpcomingReviews = (pageCount) => {
  return axios.get(`/games?page_size=${pageCount}&ordering=-released`).then((response) => response.data.results);
}

export default {
  getLatestReviews,
  getUpcomingReviews
};
