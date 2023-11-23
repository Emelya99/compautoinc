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
                            <button :class="{ active: page === 3 }" class="popular-btn" data-page="3"
                                @click="changeProducts">
                                Last month
                            </button>
                        </li>
                        <li>
                            <button :class="{ active: page === 2 }" class="popular-btn" data-page="2"
                                @click="changeProducts">Last
                                year</button>
                        </li>
                        <li>
                            <button :class="{ active: page === 1 }" class="popular-btn" data-page="1"
                                @click="changeProducts">All
                                time</button>
                        </li>
                    </ul>
                </div>
            </div>
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
import { actionTypes } from "@/store/modules/popularReviews";
import { countOnBilletsDevices } from '@/helpers/utils';
import ComHeading from "@/components/partials/Heading";
import ComAppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";
import ComSkeletonAppBilletCard1 from "@/components/billets/app-billets/card1/SkeletonAppBilletCard1";

export default {
    name: 'ComPopularReviews',
    components: {
        ComHeading,
        ComAppBilletCard1,
        ComSkeletonAppBilletCard1,
    },
    computed: {
        ...mapState({
            isLoading: state => state.popularReviews.isLoading,
            products: state => state.popularReviews.data,
            error: state => state.popularReviews.error
        }),
        countPage() {
            return countOnBilletsDevices(6, 6, 3);
        },
    },
    data() {
        return {
            page: 3,
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
@import "@/assets/style/variables.scss";

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
</style>
