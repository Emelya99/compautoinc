<template>
  <section class="section">
    <div class="container">
      <com-heading
        title-content="The most popular game last month"
      />
      <router-link class="default-btn background" :to="{name: 'reviews'}">More reviews</router-link>
    </div>
  </section>
</template>

<script>
import ComHeading from "@/components/partials/Heading";

export default {
  name: 'ComHomePage',
  components: {
    ComHeading
  },
}
</script>
