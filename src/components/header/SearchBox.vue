<template>
    <div class="search-container">
        <div class="serch-form_container" :class="{open: isSearchOpened}" ref="searchBox">
            <com-search-form />
        </div>
        <button class="search-btn" ref="searchBtn">
            <svg class="svg-icons">
                <use xlink:href="@/assets/images/icons.svg#search"></use>
            </svg>
        </button>
    </div>
</template>

<script>
import ComSearchForm from '@/components/forms/SearchForm';

export default {
    name: 'ComSearchBox',
    components: {
        ComSearchForm,
    },
    data() {
        return {
            isSearchOpened: false,
        }
    },
    methods: {
        toggleSearchMenu(e) {
            const searchBtn = this.$refs.searchBtn;
            const searchBox = this.$refs.searchBox;
            const searchInput = this.$refs.searchBox.querySelector('.searh-input');

            if (searchBtn.contains(e.target)) {
                this.isSearchOpened = true;
                setTimeout(() => {
                    searchInput.focus();
                }, 0);
                return;
            }
            if (this.isSearchOpened && !searchBox.contains(e.target)) {
                this.isSearchOpened = false;
                return;
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.toggleSearchMenu);
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.search-container {
    max-width: 240px;
    width: 100%;
    .serch-form_container {
        width: 100%;
    }
    .search-btn {
        display: none;
    }

    @media(max-width: 1180px) {
        margin: 0 40px 0 auto;
    }

    @media(max-width: $mobile) {
        max-width: initial;
        width: initial;
        margin-right: 10px;
        .serch-form_container {
            display: none;
            &.open {
                display: block;
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 100%;
                z-index: 10;
            }
        }
        .search-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            border-radius: 6px;
            color: $white-color;
            background: $accent-color;
            &:hover {
                color: $accent-color;
                background: $white-color;
            }
            svg {
                font-size: 18px;
            }
        }
    }
}
</style>