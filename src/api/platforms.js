import axios from '@/api/axios';

const getAllPlatforms = (pageSize) => {
  return axios
    .get(`/platforms?page_size=${pageSize}`)
    .then((response) => response.data.results);
};

const getParentPlatforms = (pageSize, page) => {
  return axios
    .get(`/platforms/lists/parents?page_size=${pageSize}&page=${page}`);
};

const getSinglePlatform = (slug) => {
  return axios
    .get(`/platforms/${slug}`)
    .then((response => response.data))
}

export default {
  getAllPlatforms,
  getParentPlatforms,
  getSinglePlatform,
};
