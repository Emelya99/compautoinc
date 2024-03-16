<template>
    <div class="container">

        <section class="section">
            <com-single-item-info-container
                :single-item-is-loading="singlePlatformIsLoading"
                :single-item-data="singlePlatformData"
                :single-item-error="singlePlatformError"
            />
        </section>

        <com-products-block-container 
            :is-loading="bestGamesIsLoading" 
            :products-data="bestGamesData"
            :error="bestGamesError" 
            :skeleton-count="limit"
        />

    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes as singlePlatformAction } from "@/store/modules/platforms/singlePlatform";
import { actionTypes as bestGamesByPlatform } from "@/store/modules/products/bestGamesByPlatform";
import { PLATFORM_ITEM_BEST_GAMES_LIMIT as limit } from "@/helpers/vars";
import { scrollToTop } from '@/helpers/utils';
import ComSingleItemInfoContainer from "@/components/partials/blocks/singleItemInfo/SingleItemInfoContainer";
import ComProductsBlockContainer from "@/components/partials/blocks/productsBlock/productsBlockContainer";

export default {
    name: 'ComPlatformItemPage',
    components: {
        ComSingleItemInfoContainer,
        ComProductsBlockContainer,
    },
    computed: {
        ...mapState({
            singlePlatformIsLoading: state => state.singlePlatform.isLoading,
            singlePlatformData: state => state.singlePlatform.data,
            singlePlatformError: state => state.singlePlatform.error,

            bestGamesIsLoading: state => state.bestGamesByPlatform.isLoading,
            bestGamesData: state => state.bestGamesByPlatform.data,
            bestGamesError: state => state.bestGamesByPlatform.error,
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
            this.getSinglePlatformItem();
        }
    },
    mounted() {
        this.getSinglePlatformItem();
    },
    methods: {
        getSinglePlatformItem() {
            scrollToTop();
            this.$store.dispatch(singlePlatformAction.getSinglePlatform, { slug: this.slug })
                .then(() => {
                    const platformId = this.singlePlatformData.id;
                    this.bestGamesByPlatform(platformId);
                });
        },
        bestGamesByPlatform(platformId) {
            this.$store.dispatch(bestGamesByPlatform.getBestGames, { platformId, countPage: this.limit });
        }
    }
}
</script>