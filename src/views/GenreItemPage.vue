<template>
    <div class="container">
        <com-single-item-info-container
            :single-item-is-loading="singleGenreIsLoading"
            :single-item-data="singleGenreData"
            :single-item-error="singleGenreError"
        />
    </div>
</template>
  
<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/genres/singleGenre";
import { scrollToTop } from '@/helpers/utils';
import ComSingleItemInfoContainer from "@/components/partials/blocks/singleItemInfo/SingleItemInfoContainer";

export default {
    name: 'ComGenresItemPage',
    components: {
        ComSingleItemInfoContainer,
    },
    computed: {
        ...mapState({
            singleGenreIsLoading: state => state.singleGenre.isLoading,
            singleGenreData: state => state.singleGenre.data,
            singleGenreError: state => state.singleGenre.error
        }),
        slug() {
            return this.$route.params.slug;
        }
    },
    watch: {
        slug() {
            this.getSingleGenreItem();
        }
    },
    mounted() {
        this.getSingleGenreItem();
    },
    methods: {
        getSingleGenreItem() {
            scrollToTop();
            this.$store.dispatch(actionTypes.getSingleGenre, { slug: this.slug });
        }
    }
}
</script>
