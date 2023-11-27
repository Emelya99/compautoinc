<template>
  <div>
    <com-latest-reviews />
    <com-popular-reviews />
    <com-platforms />
    <com-most-popular-game />
    <com-upcoming-reviews/>
  </div>
</template>

<script>
import ComLatestReviews from "@/components/sections/LatestReviews";
import ComPopularReviews from "@/components/sections/PopularReviews"
import ComPlatforms from "@/components/sections/Platforms";
import ComUpcomingReviews from '@/components/sections/UpcomingReviews';
import ComMostPopularGame from '@/components/sections/MostPopularGame';

export default {
  name: 'ComHomePage',
  components: {
    ComLatestReviews,
    ComUpcomingReviews,
    ComPlatforms,
    ComMostPopularGame,
    ComPopularReviews
  },
}
</script>
