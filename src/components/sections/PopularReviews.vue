<template>
    <section class="popular-reviews_section section">
        <div class="container">

            <div class="top-part-section">
                <div class="left-part">
                    <com-heading title-content="Popular reviews"
                        text-content="Most viewed reviews during the relevant period" />
                </div>
                <div class="right-part">
                    <ul class="btns-list">
                        <li>
                            <button :class="{ active: page === 4 }" class="popular-btn" data-page="4"
                                @click="changeProducts">
                                Last month
                            </button>
                        </li>
                        <li>
                            <button :class="{ active: page === 3 }" class="popular-btn" data-page="3"
                                @click="changeProducts">Last
                                year</button>
                        </li>
                        <li>
                            <button :class="{ active: page === 2 }" class="popular-btn" data-page="2"
                                @click="changeProducts">All
                                time</button>
                        </li>
                    </ul>
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
import { actionTypes } from "@/store/modules/products/popularReviews";
import { countOfBilletsOnDevices } from '@/helpers/utils';
import ComHeading from "@/components/partials/Heading";
import ComAppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";
import ComSkeletonCard1 from '@/components/billets/partials/steletons/SkeletonCard1';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComPopularReviews',
    components: {
        ComHeading,
        ComAppBilletCard1,
        ComSkeletonCard1,
        ComErrorMessage,
    },
    computed: {
        ...mapState({
            isLoading: state => state.popularReviews.isLoading,
            products: state => state.popularReviews.data,
            error: state => state.popularReviews.error
        }),
        countPage() {
            return countOfBilletsOnDevices(6, 6, 3);
        },
    },
    data() {
        return {
            page: 4,
        }
    },
    mounted() {
        if (!this.products) {
            this.getProducts();
        }
    },
    methods: {
        getProducts() {
            this.$store.dispatch(actionTypes.getPopularReviews, { countPage: this.countPage, page: this.page });
        },
        changeProducts(e) {
            this.page = Number(e.target.dataset.page);
            this.getProducts();
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.popular-reviews_section {
    .btns-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: calc(100% + 20px);
        margin: -10px;

        li {
            padding: 10px;
        }
    }

    @media(max-width: $tablet) {
        .btns-list {
            width: calc(100% + 10px);
            margin: -5px;

            li {
                padding: 5px;
            }
        }
    }

    @media(max-width: 640px) {
        .top-part-section {
            flex-direction: column;

            &>.left-part {
                padding: 0;
                margin-bottom: 20px;
            }
        }
    }
}
</style>
@/store/modules/products/popularReviews