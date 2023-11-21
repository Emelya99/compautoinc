<template>
    <section class="upcoming-reviews_section section">
        <div class="container">
            <com-heading title-content="Upcoming reviews"
                text-content="New reviews from our team, which will appear on our website very soon" />
            <div v-if="error">
                {{ error }}
            </div>
            <ul v-if="isLoading" class="grid-list style-1">
                <li v-for="index in countPage" :key="index">
                    <com-skeleton-app-billet-card1 />
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
import { actionTypes } from "@/store/modules/upcomingReviews";
import { countOnBilletsDevices } from '@/helpers/utils';
import ComHeading from "@/components/partials/Heading";
import ComAppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";
import ComSkeletonAppBilletCard1 from "@/components/billets/app-billets/card1/SkeletonAppBilletCard1";

export default {
    name: 'ComUpcomingReviews',
    components: {
        ComHeading,
        ComAppBilletCard1,
        ComSkeletonAppBilletCard1
    },
    computed: {
        ...mapState({
            isLoading: state => state.upcomingReviews.isLoading,
            products: state => state.upcomingReviews.data,
            error: state => state.upcomingReviews.error
        }),
        countPage() {
            return countOnBilletsDevices(6, 4, 4);
        }
    },
    mounted() {
        if (!this.products) {
            this.$store.dispatch(actionTypes.getUpcomingReviews, { countPage: this.countPage });
        }
    }
}
</script>