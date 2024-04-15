import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('@/views/ReviewsPage.vue'),
    meta: {
      title: 'Reviews',
    },
  },
  {
    path: '/reviews/:slug',
    name: 'app',
    component: () => import('@/views/AppPage.vue'),
    meta: {
      title: 'AppPage',
    },
  },
  {
    path: '/platforms',
    name: 'platforms',
    component: () => import('@/views/PlatformsPage.vue'),
    meta: {
      title: 'PlatformsPage',
    },
  },
  {
    path: '/platforms/:slug',
    name: 'platformItem',
    component: () => import('@/views/PlatformItemPage.vue'),
    meta: {
      title: 'PlatformItemPage',
    },
  },
  {
    path: '/genres',
    name: 'genres',
    component: () => import('@/views/GenresPage.vue'),
    meta: {
      title: 'GenresPage',
    },
  },
  {
    path: '/genres/:slug',
    name: 'genreItem',
    component: () => import('@/views/GenreItemPage.vue'),
    meta: {
      title: 'GenreItemPage',
    },
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/SearchPage.vue'),
    meta: {
      title: 'SearchPage',
    },
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('@/views/NotFoundPage.vue'),
    meta: {
      title: 'NotFoundPage',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
