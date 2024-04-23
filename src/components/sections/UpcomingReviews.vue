<template>
    <section class="upcoming-reviews_section section">
        <div class="container">

            <com-heading 
                title-content="Upcoming reviews"
                text-content="New reviews from our team, which will appear on our website very soon" 
            />

            <com-products-block-container 
                :is-loading="isLoading" 
                :products-data="products" 
                :error="error" 
                :skeleton-count="pageSize" 
            />
            
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/products/upcomingReviews";
import { countOfBilletsOnDevices } from '@/helpers/utils';
import ComHeading from "@/components/partials/Heading";
import ComProductsBlockContainer from "@/components/partials/blocks/productsBlock/productsBlockContainer";

export default {
    name: 'ComUpcomingReviews',
    components: {
        ComHeading,
        ComProductsBlockContainer,
    },
    computed: {
        ...mapState({
            isLoading: state => state.upcomingReviews.isLoading,
            products: state => state.upcomingReviews.data,
            error: state => state.upcomingReviews.error
        }),
        pageSize() {
            return countOfBilletsOnDevices(6, 4, 4);
        }
    },
    mounted() {
        if (!this.products) {
            this.$store.dispatch(actionTypes.getUpcomingReviews, { pageSize: this.pageSize });
        }
    }
}
</script>