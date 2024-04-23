<template>
    <section class="latest-reviews_section section">
        <div class="container">

            <div class="top-part-section">
                <div class="left-part">
                    <com-heading 
                        title-content="Latest reviews" 
                        text-content="The latest reviews for you from our team" 
                    />
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
import { actionTypes } from "@/store/modules/products/latestReviews";
import { countOfBilletsOnDevices } from '@/helpers/utils';
import ComHeading from "@/components/partials/Heading";
import ComProductsBlockContainer from "@/components/partials/blocks/productsBlock/productsBlockContainer";

export default {
    name: 'ComLatestReviews',
    components: {
        ComHeading,
        ComProductsBlockContainer,
    },
    computed: {
        ...mapState({
            isLoading: state => state.latestReviews.isLoading,
            products: state => state.latestReviews.data,
            error: state => state.latestReviews.error
        }),
        pageSize() {
            return countOfBilletsOnDevices(12, 8, 4);
        }
    },
    mounted() {
        if (!this.products) {
            this.$store.dispatch(actionTypes.getLatestReviews, { pageSize: this.pageSize });
        }
    }
}
</script>