<template>
    <div class="container">

        <section class="section">
            <com-single-item-info-container
                :single-item-is-loading="singleGenreIsLoading"
                :single-item-data="singleGenreData"
                :single-item-error="singleGenreError"
            />
        </section>

        <com-products-block-container 
            v-if="singleGenreData" 
            :is-loading="bestGamesIsLoading" 
            :products-data="bestGamesData"
            :error="bestGamesError" 
            :skeleton-count="limit"
        />

    </div>
</template>
  
<script>
import { mapState } from 'vuex';
import { actionTypes as singleGenreAction} from "@/store/modules/genres/singleGenre";
import { actionTypes as bestGamesByGenre } from "@/store/modules/products/bestGamesByGenre";
import { GENRE_ITEM_BEST_GAMES_LIMIT as limit } from "@/helpers/vars";
import { scrollToTop } from '@/helpers/utils';
import ComSingleItemInfoContainer from "@/components/partials/blocks/singleItemInfo/SingleItemInfoContainer";
import ComProductsBlockContainer from "@/components/partials/blocks/productsBlock/productsBlockContainer";

export default {
    name: 'ComGenresItemPage',
    components: {
        ComSingleItemInfoContainer,
        ComProductsBlockContainer,
    },
    computed: {
        ...mapState({
            singleGenreIsLoading: state => state.singleGenre.isLoading,
            singleGenreData: state => state.singleGenre.data,
            singleGenreError: state => state.singleGenre.error,

            bestGamesIsLoading: state => state.bestGamesByGenre.isLoading,
            bestGamesData: state => state.bestGamesByGenre.data,
            bestGamesError: state => state.bestGamesByGenre.error,
        }),
        limit() {
            return limit;
        },
        slug() {
            return this.$route.params.slug;
        }
    },
    watch: {
        slug() {
            this.getSingleGenreItem();
        }
    },
    mounted() {
        this.getSingleGenreItem();
    },
    methods: {
        getSingleGenreItem() {
            scrollToTop();
            this.$store.dispatch(singleGenreAction.getSingleGenre, { slug: this.slug })
                .then(() => {
                    const genreId = this.singleGenreData.id;
                    this.bestGamesByGenre(genreId);
                });
        },
        bestGamesByGenre(genreId) {
            this.$store.dispatch(bestGamesByGenre.getBestGames, { genreId, pageSize: this.limit });
        }
    }
}
</script>
