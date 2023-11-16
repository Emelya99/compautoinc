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
            <div v-if="isLoading">
                Loading...
            </div>
            <div v-if="error">
                {{ error }}
            </div>
            <ul v-if="products" class="grid-list style-1">
                <li v-for="product in products" :key="product.id">
                    <app-billet-card1 :product="product" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/products";
import {countOnBilletsDevices } from '@/helpers/utils';
import ComHeading from "@/components/partials/Heading";
import AppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";

export default {
    name: 'ComLatestReviews',
    components: {
        ComHeading,
        AppBilletCard1
    },
    computed: {
        ...mapState({
            isLoading: state => state.products.isLoading,
            products: state => state.products.data,
            error: state => state.products.error
        }),
        countPage() {
            return countOnBilletsDevices(12,8,4);
        }
    },
    mounted() {
        this.$store.dispatch(actionTypes.getLatestReviews, { countPage: this.countPage });
    }
}
</script>