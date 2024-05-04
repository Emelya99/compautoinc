<template>
    <section class="app_page">
        <div class="container">

            <div v-if="isLoading">
                Loading...
            </div>

            <div class="content_with-sidebar">

                <div class="left-part">

                    <!-- Error Component -->
                    <com-error-message v-if="error" :error-message="error" />
                    
                    <!-- Top Product Block -->
                    <com-top-product-block v-if="product" :product="product" />

                    <!-- Screens Block -->
                    <com-screens-block v-if="product && product.screenshots_count > 2" :slug="slug" />

                    <!-- Get Buttons Block -->
                    <com-get-buttons-block v-if="product && product.stores" :slug="slug" />

                    <!-- Comments Block -->
                    <com-comments-block v-if="product && product.reddit_count" :slug="slug" :comments-link="product.reddit_url" />

                </div>

                <div class="right-part">
                    
                    <!-- Game Series Block -->
                    <com-game-series-block v-if="product && product.game_series_count" :slug="slug" />

                    <!-- Popular Reviews Block -->
                    <com-popular-reviews-block />

                </div>

            </div>

        </div>
    </section>
</template>
  
<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/products/productPage/productItem";
import { scrollToTop } from '@/helpers/utils';
import ComTopProductBlock from '@/views/appPage/components/topProductBlock';
import ComGameSeriesBlock from '@/views/appPage/components/gameSeriesBlock';
import ComPopularReviewsBlock from '@/views/appPage/components/popularReviewsBlock';
import ComScreensBlock from '@/views/appPage/components/screensBlock';
import ComGetButtonsBlock from '@/views/appPage/components/getButtonsBlock';
import ComCommentsBlock from '@/views/appPage/components/commentsBlock';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComAppPage',
    components: {
        ComTopProductBlock,
        ComGameSeriesBlock,
        ComPopularReviewsBlock,
        ComScreensBlock,
        ComGetButtonsBlock,
        ComCommentsBlock,
        ComErrorMessage,
    },
    computed: {
        ...mapState({
            isLoading: state => state.productItem.isLoading,
            product: state => state.productItem.data,
            error: state => state.productItem.error,
        }),
        slug() {
            return this.$route.params.slug;
        }
    },
    watch: {
        slug() {
            this.getSingleGame();
        }
    },
    methods: {
        getSingleGame() {
            scrollToTop();
            this.$store.dispatch(actionTypes.getSingleProduct, { slug: this.slug });
        },
    },
    mounted() {
        this.getSingleGame();
    },
}
</script>

<style lang="scss">
.sidebar_block {
    .heading-container {
        margin-bottom: 20px;
        .title {
            margin: 0;
        }
    }
    @media(min-width: 1200px) {
        .title.default {
            font-size: 28px;
        }
        .app-billet.card1 {
            .platforms_list {
                padding: 10px;
            }
            .title {
                left: 10px;
                bottom: 10px;
                width: calc(100% - 90px);
            }
            .rating-box {
                right: 10px;
                bottom: 10px;
            }
        }
    }
}
</style>