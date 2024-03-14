<template>
    <section class="genres_section">
        <div class="container">
            
            <div class="top-part-section">
                <div class="left-part">
                    <com-heading title-content="Chose your genre"
                        text-content="Our website features curated game reviews across various genres." />
                </div>
                <div class="right-part">
                    <router-link class="default-btn background" :to="{ name: 'genres' }">
                        More genres
                        <svg class="svg-icons">
                            <use xlink:href="@/assets/images/icons.svg#btn-arrow"></use>
                        </svg>
                    </router-link>
                </div>
            </div>

            <com-genres-block :isLoading="isLoading" :data="genres" :error="error" :skeletonCount="6" />

        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/genres/genres";
import ComHeading from "@/components/partials/Heading";
import ComGenresBlock from "@/components/partials/blocks/genresBlock/genresBlock";

export default {
    name: 'ComGenres',
    components: {
        ComHeading,
        ComGenresBlock,
    },
    computed: {
        ...mapState({
            isLoading: state => state.genres.isLoading,
            genres: state => state.genres.bestGenresData,
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