<template>
    <section class="genres_section">
        <div class="container">
            <com-heading title-content="Chose your genre"
                text-content="Our website features curated game reviews across various genres." />
            <div v-if="error">
                {{ error }}
            </div>
            <ul v-if="isLoading" class="grid-list style-1">
                <li v-for="index in 6" :key="index">
                    <com-steleton-card2 />
                </li>
            </ul>
            <ul v-if="genres" class="grid-list style-1">
                <li v-for="genre in genres" :key="genre.id">
                    <com-genre-billet-card1 :genre="genre" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/genres";
import ComHeading from "@/components/partials/Heading";
import ComGenreBilletCard1 from '@/components/billets/genre-billets/card1/GenreBilletCard1';
import ComSteletonCard2 from '@/components/billets/partials/steletons/SkeletonCard2';

export default {
    name: 'ComGenres',
    components: {
        ComHeading,
        ComGenreBilletCard1,
        ComSteletonCard2,
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
            this.$store.dispatch(actionTypes.getGenres, { countPage: 6 });
        }
    }
}
</script>