<template>
  <div>
    <com-latest-reviews />
    <com-popular-reviews />
    <com-platforms />
    <com-upcoming-reviews/>
  </div>
</template>

<script>
import ComLatestReviews from "@/components/sections/LatestReviews";
import ComPopularReviews from "@/components/sections/PopularReviews"
import ComPlatforms from "@/components/sections/Platforms";
import ComUpcomingReviews from '@/components/sections/UpcomingReviews';

export default {
  name: 'ComHomePage',
  components: {
    ComLatestReviews,
    ComUpcomingReviews,
    ComPlatforms,
    ComPopularReviews
  },
}
</script>
