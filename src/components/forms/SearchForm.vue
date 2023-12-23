<template>
    <form class="search-form" ref="formBox" autocomplete="off">
        <input class="searh-input" type="search" placeholder="Search" required v-model="search" @input="handleSearch" @click="handleClick">
        <button class="sbmt-btn" type="submit">
            <svg class="svg-icons">
                <use xlink:href="@/assets/images/icons.svg#search"></use>
            </svg>
        </button>

        <div v-if="(isSearchResultsOpened || error) && search.length >= 2" class="search-results">
            <ul ref="resultsBox" @scroll="resultsScroll">
                <li v-if="error">
                    <p class="info-message">{{ error }}</p>
                </li>

                <li v-else-if="products.length === 0 && !isLoading">
                    <p class="info-message">No results found for your search.</p>
                </li>

                <li v-for="product in products" :key="product.id">
                    <router-link class="search-item" :to="{ name: 'app', params: { slug: `${product.slug}` } }">
                        <span class="img-container">
                            <img v-if="product.background_image" :src="product.background_image" :alt="product.name">
                            <img v-else src="@/assets/images/placeholder-game.png" alt="img">
                        </span>
                        <span class="title ellipsis">{{ product.name }}</span>
                    </router-link>
                </li>
            </ul>

            <div v-if="isLoading" class="loading-container">
                <com-small-loader />
            </div>
        </div>
    </form>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/search";
import debounce from 'lodash.debounce';
import ComSmallLoader from '@/components/partials/loaders/SmallLoader';

export default {
    name: 'ComSearchForm',
    components: {
        ComSmallLoader
    },
    data() {
        return {
            search: '',
            isSearchResultsOpened: false,
            page: 1,
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.search.isLoading,
            products: state => state.search.data,
            isNextPage: state => state.search.isNextPage,
            error: state => state.search.error
        }),
        slug() {
            return this.$route.path;
        },
    },
    watch: {
        slug() {
            if (this.search || this.isSearchResultsOpened) {
                this.search = '';
                this.isSearchResultsOpened = false;
            }
        },
    },
    methods: {
        closeSearchResults(e) {
            const formBox = this.$refs.formBox;
            if (this.isSearchResultsOpened && !formBox.contains(e.target)) {
                this.isSearchResultsOpened = false;
            }
        },
        handleSearch() {
            if (this.search.length >= 2) {
                this.getSearch();
            } else {
                this.isSearchResultsOpened = false;
            }
        },
        handleClick() {
            if (this.search.length >= 2 && this.products) {
                this.isSearchResultsOpened = true;
            }
        },
        resultsScroll() {
            const resultsBox = this.$refs.resultsBox;

            if (resultsBox.scrollTop + resultsBox.clientHeight + 5 >= resultsBox.scrollHeight && this.isNextPage) {
                
                this.loadMoreResults();
            }
        },
        loadMoreResults() {
            this.page += 1;
            this.$store.dispatch(actionTypes.getLoadMoreSearch, { currentUserInput: this.search, page: this.page }).then(() => {
                this.isSearchResultsOpened = true;
            })
        },
        getSearch: debounce(function () {
            this.page = 1;
            this.$store.dispatch(actionTypes.getSearch, { currentUserInput: this.search, page: this.page }).then(() => {
                this.isSearchResultsOpened = true;
            })
        }, 500),
    },
    mounted() {
        document.addEventListener('click', this.closeSearchResults);
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.search-form {
    position: relative;
    width: 100%;

    .searh-input {
        display: flex;
        align-items: center;
        width: 100%;
        height: 42px;
        padding: 5px 62px 5px 20px;
        border: 1px solid $accent-color;
        outline: none;
        border-radius: 5px;
        font-family: $main-font;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: rgba(76, 175, 80, 0.50);
        background: rgba(76, 175, 80, 0.05);

        &::placeholder {
            color: inherit;
        }
    }

    .sbmt-btn {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 5px 5px 0;
        width: 42px;
        height: 42px;
        color: $white-color;
        background: $accent-color;

        svg {
            font-size: 24px;
        }

        &:hover {
            color: $accent-color;
            background: transparent;
        }
    }

    .search-results {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        width: calc(100% + 120px);
        padding: 20px 10px 20px 0;
        border-radius: 12px;
        box-shadow: 6px 6px 50px 0px rgba(0, 0, 0, 0.10);
        background: $white-color;

        ul {
            padding-left: 20px;
            overflow-y: auto;
            max-height: 316px;
        }

        li {
            display: inline-block;
            width: 100%;
            padding-right: 20px;

            &:not(:last-child) {
                margin-bottom: 20px;
            }
        }
    }

    .search-item {
        display: flex;
        align-items: center;

        &:hover,
        &:focus {
            .title {
                color: $accent-color;
            }
        }

        .img-container {
            width: 36px;
            height: 36px;

            img {
                border-radius: 6px;
            }
        }

        .title {
            flex: 1;
            padding-left: 15px;
            margin: 0;
            font-weight: 500;
            font-size: 18px;
            line-height: 24px;
            color: $main-color;
            transition: $base-transition;
        }
    }

    .info-message {
        margin: 0;
    }

    .loading-container {
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
    }

    @media(max-width: 1180px) {
        .searh-input {
            height: 40px;
            padding: 5px 60px 5px 20px;
        }

        .sbmt-btn {
            width: 40px;
            height: 40px;
        }
    }

    @media(max-width: $mobile) {
        .searh-input {
            background: $white-color;
        }

        .search-results {
            width: 100%;
            padding: 15px 10px 15px 0;

            ul {
                max-height: 240px;
                padding-left: 15px;
            }

            li {

                &:not(:last-child) {
                    margin-bottom: 15px;
                }
            }
        }
    }
}
</style>