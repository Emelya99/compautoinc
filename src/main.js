import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/main.scss';
import { provideApolloClient } from '@vue/apollo-composable';
import { apolloClient } from '@/apollo-client'; // Путь к вашему клиенту Apollo

provideApolloClient(apolloClient);

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount('#app');
