<template>
    <div class="popular-reviews_block sidebar_block">

        <com-heading title-content="Popular Reviews" />

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
import { actionTypes } from "@/store/modules/products/productPage/popularReviewsBlock";
import ComHeading from '@/components/partials/Heading';
import ComAppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";
import ComSkeletonCard1 from '@/components/billets/partials/steletons/SkeletonCard1';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComPopularReviewsBlock',
    components: {
        ComHeading,
        ComAppBilletCard1,
        ComSkeletonCard1,
        ComErrorMessage,
    },
    computed: {
        ...mapState({
            isLoading: state => state.popularReviewsBlock.isLoading,
            products: state => state.popularReviewsBlock.data,
            error: state => state.popularReviewsBlock.error,
        }),
        limit() {
            return limit;
        },
    },
    mounted() {
        this.$store.dispatch(actionTypes.getPopularReviewsBlock, { pageSize: this.limit, page: 5 });
    },
}
</script>