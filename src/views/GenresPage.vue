<template>
    <section class="genres_page">
        <div class="container">

            <com-heading
                title-content="All Genres"
                text-content="Explore a myriad of genres on our site, catering to every taste and preference." 
            />

            <com-genres-block-container 
                :is-loading="isLoading" 
                :genres-data="genres" 
                :error="error" 
                :skeleton-count="12"
            />

        </div>
    </section>
</template>
  
<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/genres/genres";
import ComGenresBlockContainer from "@/components/partials/blocks/genresBlock/genresBlockContainer";
import ComHeading from "@/components/partials/Heading";

export default {
    name: 'ComGenresPage',
    components: {
        ComHeading,
        ComGenresBlockContainer,
    },
    computed: {
        ...mapState({
            isLoading: state => state.genres.isLoading,
            genres: state => state.genres.data,
            error: state => state.genres.error
        }),
    },
    mounted() {
        if (!this.genres) {
            this.$store.dispatch(actionTypes.getGenres);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.genres_page {
    padding-top: 30px;
    .title.small {
        @include margin-bottom(20px,null,15px);
    }
    .heading-container {
        margin-bottom: 40px;
    }
    @media(max-width: $tablet) {
        padding-top: 10px;
    }
    @media(max-width: $mobile) {
        padding-top: 5px;
    }
}
</style>