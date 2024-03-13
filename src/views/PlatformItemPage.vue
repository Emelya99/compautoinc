<template>
    <div class="container">

        <section class="section">
            <com-single-item-info-container
                :singleItemIsLoading="singlePlatformIsLoading"
                :singleItemData="singlePlatformData"
                :singleItemError="singlePlatformError"
            />
        </section>

        <div>
            <com-error-message v-if="bestGamesError" :errorMessage="bestGamesError" />
            <ul v-if="bestGamesIsLoading" class="grid-list style-1">
                <li v-for="index in limit" :key="index">
                    <com-skeleton-card1 />
                </li>
            </ul>
            <ul v-if="bestGamesData" class="grid-list style-1">
                <li v-for="product in bestGamesData" :key="product.id">
                    <com-app-billet-card1 :product="product" />
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes as singlePlatformAction } from "@/store/modules/platforms/singlePlatform";
import { actionTypes as bestGamesByPlatform } from "@/store/modules/products/bestGamesByPlatform";
import { PLATFORM_ITEM_BEST_GAMES_LIMIT as limit } from "@/helpers/vars";
import { scrollToTop } from '@/helpers/utils';
import ComSingleItemInfoContainer from "@/components/sections/singleItems/SingleItemInfoContainer";
import ComAppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";
import ComSkeletonCard1 from '@/components/billets/partials/steletons/SkeletonCard1';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComPlatformItemPage',
    components: {
        ComSingleItemInfoContainer,
        ComSkeletonCard1,
        ComAppBilletCard1,
        ComErrorMessage
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