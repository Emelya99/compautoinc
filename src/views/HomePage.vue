<template>
  <div>
    <com-welcome-reviews />
    <com-latest-reviews />
    <com-popular-reviews v-if="visibleSectionIndex > 0" />
    <com-platforms v-if="visibleSectionIndex > 1" />
    <com-most-popular-game v-if="visibleSectionIndex > 2" />
    <com-upcoming-reviews v-if="visibleSectionIndex > 3" />
    <com-genres v-if="visibleSectionIndex > 4" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mutationTypes } from "@/store/modules/lazy-loading/indexLoader";

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
  computed: {
    ...mapState({
      totalSections: state => state.indexLoader.totalSections,
      visibleSectionIndex: state => state.indexLoader.visibleSectionIndex,
    }),
  },
  mounted() {
    if (this.visibleSectionIndex < this.totalSections) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollBottom = scrollTop + windowHeight;

      if (scrollBottom >= docHeight - 200) {
        if (this.visibleSectionIndex >= this.totalSections) {
          window.removeEventListener('scroll', this.handleScroll);
        } else {
          this.$store.commit(mutationTypes.updateVisibleSectionIndex, this.visibleSectionIndex + 1);
        }
      }
    },
  },
}
</script>
