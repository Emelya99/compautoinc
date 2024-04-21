<template>
    <div class="game-series_block">

        <com-heading title-content="Game Series" />

        <com-error-message v-if="error" :error-message="error" />

        <ul v-if="isLoading" class="grid-list style-3">
            <li v-for="index in limit" :key="index">
                <com-skeleton-card1 />
            </li>
        </ul>

        <ul v-if="products" class="grid-list style-3">
            <li v-for="product in products" :key="product.id">
                <com-app-billet-card1 :product="product" />
            </li>
        </ul>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import { APP_PAGE_SIDEBAR_LIMIT as limit } from "@/helpers/vars";
import { actionTypes } from "@/store/modules/products/productPage/gameSeries";
import ComHeading from '@/components/partials/Heading';
import ComAppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";
import ComSkeletonCard1 from '@/components/billets/partials/steletons/SkeletonCard1';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComGameSeriesBlock',
    props: {
        slug: {
            type: String,
            required: true,
        }
    },
    components: {
        ComHeading,
        ComAppBilletCard1,
        ComSkeletonCard1,
        ComErrorMessage,
    },
    computed: {
        ...mapState({
            isLoading: state => state.gameSeries.isLoading,
            products: state => state.gameSeries.data,
            error: state => state.gameSeries.error,
        }),
        limit() {
            return limit;
        },
    },
    mounted() {
        this.$store.dispatch(actionTypes.getGameSeries, { slug: this.slug, pageSize: this.limit });
    },
}
</script>

<style lang="scss">
.game-series_block {
    .heading-container {
        margin-bottom: 20px;
        .title {
            margin: 0;
        }
    }
    @media(min-width: 1200px) {
        .title.default {
            font-size: 28px;
        }
        .app-billet.card1 {
            .platforms_list {
                padding: 10px;
            }
            .title {
                left: 10px;
                bottom: 10px;
            }
            .rating-box {
                right: 10px;
                bottom: 10px;
            }
        }
    }
}
</style>