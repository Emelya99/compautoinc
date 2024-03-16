<template>
    <section class="popular-reviews_section section">
        <div class="container">

            <div class="top-part-section">
                <div class="left-part">
                    <com-heading 
                        title-content="Popular reviews"
                        text-content="Most viewed reviews during the relevant period" 
                    />
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
                                @click="changeProducts">
                                Last year
                            </button>
                        </li>
                        <li>
                            <button :class="{ active: page === 2 }" class="popular-btn" data-page="2"
                                @click="changeProducts">
                                All time
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <com-products-block-container 
                :is-loading="isLoading" 
                :products-data="products" 
                :error="error" 
                :skeleton-count="countPage" 
            />
            
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/products/popularReviews";
import { countOfBilletsOnDevices } from '@/helpers/utils';
import ComHeading from "@/components/partials/Heading";
import ComProductsBlockContainer from "@/components/partials/blocks/productsBlock/productsBlockContainer";

export default {
    name: 'ComPopularReviews',
    components: {
        ComHeading,
        ComProductsBlockContainer,
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