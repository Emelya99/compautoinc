<template>
    <section class="app_page">
        <div class="container">

            <com-error-message v-if="error" :error-message="error" />

            <div v-if="isLoading">
                Loading...
            </div>

            <div class="content_with-sidebar">

                <div class="left-part">
                    
                    <!-- Top Product Block -->
                    <com-top-product-block v-if="product" :product="product" />

                </div>

                <div class="right-part">
                    
                    <!-- Game Series Block -->
                    <com-game-series-block v-if="product && product.game_series_count" :slug="slug" />

                </div>

            </div>

        </div>
    </section>
</template>
  
<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/products/productPage/productItem";
import { scrollToTop } from '@/helpers/utils';
import comTopProductBlock from '@/views/appPage/components/topProductBlock';
import comGameSeriesBlock from '@/views/appPage/components/gameSeriesBlock';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComAppPage',
    components: {
        comTopProductBlock,
        comGameSeriesBlock,
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
