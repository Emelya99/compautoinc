<template>
  <div>
    <com-welcome-reviews />
    <com-latest-reviews />
    <com-popular-reviews />
    <com-platforms />
    <com-most-popular-game />
    <com-upcoming-reviews/>
    <com-genres />
  </div>
</template>

<script>
import ComWelcomeReviews from "@/components/sections/WelcomeReviews";
import ComLatestReviews from "@/components/sections/LatestReviews";
import ComPopularReviews from "@/components/sections/PopularReviews"
import ComPlatforms from "@/components/sections/Platforms";
import ComUpcomingReviews from '@/components/sections/UpcomingReviews';
import ComMostPopularGame from '@/components/sections/MostPopularGame';
import ComGenres from '@/components/sections/Genres'

export default {
  name: 'ComHomePage',
  components: {
    ComWelcomeReviews,
    ComLatestReviews,
    ComUpcomingReviews,
    ComPlatforms,
    ComMostPopularGame,
    ComPopularReviews,
    ComGenres,
  },
}
</script>
