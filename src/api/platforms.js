import axios from '@/api/axios';

const getAllPlatforms = (pageCount) => {
  return axios
    .get(`/platforms?page_size=${pageCount}`)
    .then((response) => response.data.results);
};

const getParentPlatforms = (pageCount, page) => {
  return axios
    .get(`/platforms/lists/parents?page_size=${pageCount}&page=${page}`)
};

export default {
  getAllPlatforms,
  getParentPlatforms
};
