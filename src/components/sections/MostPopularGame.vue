<template>
    <section class="most-popular-game_section section">
        <div class="container">
            <com-heading title-content="The most popular game last month"
                text-content="This is the article that users of our site viewed the most times today" />
            <div v-if="error">
                {{ error }}
            </div>
            <div v-if="isLoading">
                Loading...
            </div>
            <div v-if="product">
                <com-app-billet-card2 :product="product" />
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/mostPopularGame";
import ComHeading from "@/components/partials/Heading";
import ComAppBilletCard2 from '@/components/billets/app-billets/card2/AppBilletCard2';

export default {
    name: 'ComMostPopularGame',
    components: {
        ComHeading,
        ComAppBilletCard2
    },
    computed: {
        ...mapState({
            isLoading: state => state.mostPopularGame.isLoading,
            product: state => state.mostPopularGame.data,
            error: state => state.mostPopularGame.error
        }),
    },
    mounted() {
        if (!this.product) {
            this.$store.dispatch(actionTypes.getMostPopularGame);
        }
    }
}
</script>