<template>
    <section class="welcome-reviews_section section">
        <div class="container">

            <com-error-message v-if="error" :error-message="error" />
            
            <div class="inner">
                <div class="left-part">

                    <com-skeleton-card4 v-if="isLoading" />

                    <com-app-billet-card1 v-if="firstProduct" :product="firstProduct" billet-extra-class="big" />

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

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/products/welcomeReviews";
import ComAppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";
import ComAppBilletCard3 from "@/components/billets/app-billets/card3/AppBilletCard3";
import ComSkeletonCard3 from '@/components/billets/partials/steletons/SkeletonCard3';
import ComSkeletonCard4 from '@/components/billets/partials/steletons/SkeletonCard4';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComWelcomeReviews',
    components: {
        ComAppBilletCard3,
        ComAppBilletCard1,
        ComSkeletonCard3,
        ComSkeletonCard4,
        ComErrorMessage,
    },
    computed: {
        ...mapState({
            isLoading: state => state.welcomeReviews.isLoading,
            firstProduct: state => state.welcomeReviews.firstProduct,
            otherProducts: state => state.welcomeReviews.otherProducts,
            error: state => state.welcomeReviews.error
        }),
    },
    mounted() {
        if (!this.firstProduct || !this.otherProducts) {
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
            flex: initial;
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