<template>
  <div class="page">
    <div class="wrapper">

      <!-- Header -->
      <com-header />

      <main>

          <!-- Breadcrumbs -->
          <com-breadcrumbs v-show="pageName !== 'home'" />

          <router-view />

      </main>

    </div>

    <!-- Footer -->
    <com-footer />

  </div>
</template>

<script>
import ComHeader from '@/components/header/Header';
import ComFooter from '@/components/footer/Footer';
import ComBreadcrumbs from '@/components/breadcrumbs/Breadcrumbs'

export default {
  name: 'ComApp',
  components: {
    ComHeader,
    ComFooter,
    ComBreadcrumbs,
  },
  computed: {
    pageName() {
      console.log('commit 1');
      console.log('commit 2');
      return this.$route.name;
    }
  },
}

</script>