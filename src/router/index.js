import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import ReviewsPage from '@/views/ReviewsPage.vue';
import AppPage from '@/views/AppPage.vue';
import DownloadPage from '@/views/DownloadPage.vue';
import PlatformsPage from '@/views/PlatformsPage.vue';
import PlatformItemPage from '@/views/PlatformItemPage.vue';
import GenresPage from '@/views/GenresPage.vue';
import GenreItemPage from '@/views/GenreItemPage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsPage,
  },
  {
    path: '/reviews/:slug',
    name: 'app',
    component: AppPage,
  },
  {
    path: '/reviews/:slug/get',
    name: 'download',
    component: DownloadPage,
  },
  {
    path: '/platforms',
    name: 'platforms',
    component: PlatformsPage,
  },
  {
    path: '/platforms/:slug',
    name: 'platformItem',
    component: PlatformItemPage,
  },
  {
    path: '/genres',
    name: 'genres',
    component: GenresPage,
  },
  {
    path: '/genres/:slug',
    name: 'genreItem',
    component: GenreItemPage,
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
