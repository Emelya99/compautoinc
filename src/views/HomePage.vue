<template>
  <div>
    <com-latest-reviews />
    <com-upcoming-reviews/>
  </div>
</template>

<script>
import ComLatestReviews from "@/components/sections/LatestReviews";
import ComUpcomingReviews from '@/components/sections/UpcomingReviews';

export default {
  name: 'ComHomePage',
  components: {
    ComLatestReviews,
    ComUpcomingReviews
  },
}
</script>
