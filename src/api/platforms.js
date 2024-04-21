import axios from '@/api/axios';

const getAllPlatforms = (countPage) => {
  return axios
    .get(`/platforms?page_size=${countPage}`)
    .then((response) => response.data.results);
};

const getParentPlatforms = (countPage, page) => {
  return axios
    .get(`/platforms/lists/parents?page_size=${countPage}&page=${page}`);
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
