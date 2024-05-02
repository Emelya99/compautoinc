<template>
    <div class="get-buttons_block">

        <com-error-message v-if="error" :error-message="error" />

        <ul class="get-buttons_list">
            <li v-for="store in stores" :key="store.id">
                <a class="get-btn" :href="store.url" target="_blank">Get <br /> from the {{ store.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/products/productPage/getButtons";
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: "ComGetButtonsBlock",
    props: {
        slug: {
            type: String,
            required: true,
        }
    },
    components: {
        ComErrorMessage,
    },
    computed: {
        ...mapState({
            isLoading: state => state.getButtons.isLoading,
            stores: state => state.getButtons.data,
            error: state => state.getButtons.error,
        }),
    },
    mounted() {
        this.$store.dispatch(actionTypes.getButtons, { slug: this.slug });
    },
}
</script>

<style lang="scss" scoped>
.get-buttons_block {
    .get-buttons_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        width: 100%;
        @media(max-width: 767px) {
            gap: 16px;
        }
        @media(max-width: 640px) {
            li {
                width: 100%;
            }
        }
    }
}
</style>