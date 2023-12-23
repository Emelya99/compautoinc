<template>
    <section class="welcome-reviews_section section">
        <div class="container">
            <div class="inner">
                <div class="left-part">

                    <!-- <div v-if="firstProduct">
                        {{ firstProduct.name }}
                    </div> -->

                </div>
                <div class="right-part">

                    <ul v-if="isLoading" class="grid-list style-2">
                        <li v-for="index in 4" :key="index">
                            <com-skeleton-card3 />
                        </li>
                    </ul>
                    
                    <ul v-if="otherProducts" class="grid-list style-2">
                        <li v-for="product in otherProducts" :key="product.id">
                            <com-app-billet-card3 :product="product" />
                        </li>
                    </ul>

                    <div v-if="error">
                        {{ error }}
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/welcomeReviews";
import ComAppBilletCard3 from "@/components/billets/app-billets/card3/AppBilletCard3";
import ComSkeletonCard3 from '@/components/billets/partials/steletons/SkeletonCard3';

export default {
    name: 'ComWelcomeReviews',
    components: {
        ComAppBilletCard3,
        ComSkeletonCard3
    },
    computed: {
        ...mapState({
            isLoading: state => state.welcomeReviews.isLoading,
            products: state => state.welcomeReviews.data,
            error: state => state.welcomeReviews.error
        }),
    },
    data() {
        return {
            firstProduct: null,
            otherProducts: [],
        }
    },
    watch: {
        products() {
            this.firstProduct = this.products[0];
            this.otherProducts = this.products.slice(1);
        }
    },
    mounted() {
        if (!this.products) {
            this.$store.dispatch(actionTypes.getWelcomeReviews, { countPage: 5, page: 1 });
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.welcome-reviews_section {
    .inner {
        display: flex;
        flex-wrap: wrap;
    }

    .left-part {
        flex: 1;
        padding-right: 30px;
    }

    .right-part {
        width: 320px;
    }

    @media(min-width: $tablet) {
        padding-top: 5px;
    }

    @media(max-width: $tablet) {
        .left-part {
            padding-right: 20px;
        }

        .right-part {
            width: 220px;
        }
    }

    @media(max-width: 640px) {
        .left-part {
            width: 100%;
            margin-bottom: 20px;
            padding: 0;
        }

        .right-part {
            width: 100%;
        }
    }
}

</style>