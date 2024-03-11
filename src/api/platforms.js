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

const getSinglePlatform = (slug) => {
  return axios
    .get(`/platforms/${slug}`)
    .then((response => response.data))
}

const getBestGamesByPlatform = (platformId) => {
  return axios
    .get(`/games?platforms=${platformId}&ordering=-metarating&limit=12`)
    .then((response => response.data))
}

export default {
  getAllPlatforms,
  getParentPlatforms,
  getSinglePlatform,
  getBestGamesByPlatform
};
