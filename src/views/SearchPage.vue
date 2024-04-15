<template>
    <section class="search_page">
        <div class="container">
            <h1 class="title default">Search for: <span>{{ searchText }}</span></h1>

            <div v-if="!products.count && !isLoading && !error" class="empty-results_block">
                <p>☹️ No results found for your search.</p>
            </div>

            <com-products-block-container 
                :is-loading="isLoading"
                :products-data="products.results"
                :error="error"
                :skeleton-count="skeletonLimit"
            />

            <com-pagination 
                v-if="products.results"
                :total="products.count"
                :limit="gameLimit"
                :current-page="currentPage"
                :url="baseUrl"
            />

        </div>
    </section>
</template>
  
<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/products/searchPage";
import { scrollToTop } from '@/helpers/utils';
import { SEARCH_PAGE_SKELETON_LIMIT as skeletonLimit } from "@/helpers/vars";
import { SEARCH_PAGE_GAME_LIMIT as gameLimit } from "@/helpers/vars";
import ComProductsBlockContainer from "@/components/partials/blocks/productsBlock/productsBlockContainer";
import ComPagination from '@/components/paginations/Pagination';

export default {
    name: 'ComSearchPage',
    components: {
        ComProductsBlockContainer,
        ComPagination,
    },
    computed: {
        ...mapState({
            isLoading: state => state.searchPage.isLoading,
            products: state => state.searchPage.data,
            error: state => state.searchPage.error
        }),
        skeletonLimit() {
            return skeletonLimit;
        },
        gameLimit() {
            return gameLimit;
        },
        currentPage() {
            return Number(this.$route.query.page || '1');
        },
        baseUrl() {
            return this.$route.fullPath;
        },
        searchText() {
            return this.$route.query.text;
        },
    },
    watch: {
        baseUrl() {
            scrollToTop();
            this.getSearch();
        }
    },
    methods: {
        getSearch() {
            this.$store.dispatch(actionTypes.getSearch, { currentUserInput: this.searchText, page: this.currentPage, countPage: this.gameLimit });
        }
    },
    mounted() {
        this.getSearch();
    }
}
</script>
  
<style lang="scss" scoped>
@import "@/styles/variables.scss";

.search_page {
    .title.default {
        margin: 10px 0 30px;
        span {
            text-transform: capitalize;
        }
    }
}
</style>