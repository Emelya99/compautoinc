<template>
  <div class="page">
    <div class="wrapper">

      <!-- Header -->
      <com-header />

      <main>
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

export default {
  name: 'ComApp',
  components: {
    ComHeader,
    ComFooter
  },
}

</script>

<style lang="scss">
// @import "@/assets/style/main.scss";
</style>