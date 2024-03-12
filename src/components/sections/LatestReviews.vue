<template>
    <section class="latest-reviews_section section">
        <div class="container">

            <div class="top-part-section">
                <div class="left-part">
                    <com-heading title-content="Latest reviews" text-content="The latest reviews for you from our team" />
                </div>
                <div class="right-part">
                    <router-link class="default-btn background" :to="{ name: 'reviews' }">
                        More reviews
                        <svg class="svg-icons">
                            <use xlink:href="@/assets/images/icons.svg#btn-arrow"></use>
                        </svg>
                    </router-link>
                </div>
            </div>

            <com-error-message v-if="error" :errorMessage="error" />

            <ul v-if="isLoading" class="grid-list style-1">
                <li v-for="index in countPage" :key="index">
                    <com-skeleton-card1 />
                </li>
            </ul>

            <ul v-if="products" class="grid-list style-1">
                <li v-for="product in products" :key="product.id">
                    <com-app-billet-card1 :product="product" />
                </li>
            </ul>
            
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/latestReviews";
import { countOfBilletsOnDevices } from '@/helpers/utils';
import ComHeading from "@/components/partials/Heading";
import ComAppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";
import ComSkeletonCard1 from '@/components/billets/partials/steletons/SkeletonCard1';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComLatestReviews',
    components: {
        ComHeading,
        ComAppBilletCard1,
        ComSkeletonCard1,
        ComErrorMessage
    },
    computed: {
        ...mapState({
            isLoading: state => state.latestReviews.isLoading,
            products: state => state.latestReviews.data,
            error: state => state.latestReviews.error
        }),
        countPage() {
            return countOfBilletsOnDevices(12, 8, 4);
        }
    },
    mounted() {
        if (!this.products) {
            this.$store.dispatch(actionTypes.getLatestReviews, { countPage: this.countPage });
        }
    }
}
</script>