import axios from '@/api/axios';

import { useQuery } from '@vue/apollo-composable';
import { gql } from 'graphql-tag';

const GET_LATEST_REVIEWS = gql`
  query GetLatestReviews($countPage: Int!) {
    games(page_size: $countPage, ordering: "-updated") {
      results {
        id,
        name,
        slug,
        background_image,
        rating,
        platforms {
          id,
          name
        }
      }
    }
  }
`;

const getLatestReviews = (countPage) => {
  const { result } = useQuery(GET_LATEST_REVIEWS, { countPage });

  console.log(result);

  return result.value ? result.value.data.games.results : null;
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

const getBestGamesByGenre = (genreId, countPage) => {
  return axios
    .get(`/games?genres=${genreId}&ordering=-metarating&page_size=${countPage}`)
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
  getBestGamesByGenre,
  getSearchProducts,
};
