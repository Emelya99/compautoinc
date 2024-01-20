<template>
    <div class="pagination" v-if="pages.length > 1">
        <ul class="pagination-list">
            <li>
                <router-link 
                    :to="{ path: url, query: { page: currentPage - 1 } }"
                    class="item nav-btn" 
                    :class="{disabled: currentPage === 1}"
                >
                    <svg class="svg-icons">
                        <use xlink:href="@/assets/images/icons.svg#arrow-left"></use>
                    </svg>
                </router-link>
            </li>
            <li v-for="page in pages" :key="page">
                <router-link 
                    :to="{ path: url, query: { page: page } }"
                    class="item" 
                    :class="{active: currentPage === page}"
                >
                    {{ page }}
                </router-link>
            </li>
            <li v-if="countMoreThanCurrent">
                <span class="item more">...</span>
            </li>
            <li v-if="countMoreThanCurrent">
                <router-link 
                    :to="{ path: url, query: { page: pagesCount } }"
                    class="item" 
                    :class="{active: currentPage === pagesCount}"
                >
                    {{ pagesCount }}
                </router-link>
            </li>
            <li>
                <router-link 
                    :to="{ path: url, query: { page: currentPage + 1 } }"
                    class="item nav-btn" 
                    :class="{disabled: currentPage === pagesCount}"
                >
                    <svg class="svg-icons">
                        <use xlink:href="@/assets/images/icons.svg#arrow-right"></use>
                    </svg>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { range } from "@/helpers/utils";

export default {
    name: 'ComPagination',
    props: {
        total: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    computed: {
        pagesCount() {
            return Math.ceil(this.total / this.limit);
        },
        countMoreThanCurrent() {
            return this.pagesCount > this.currentPage + 3;
        },
        pages() {
            if (this.countMoreThanCurrent) {
                let visiblePages = this.currentPage + 4;
                if (this.currentPage === 2) {
                    return range(1, 5);
                }
                if (this.currentPage > 2) {
                    let start = this.currentPage - 2;
                    let end = visiblePages -2;
                    return range(start, end);
                }
                return range(this.currentPage, visiblePages);
            } else {
                if (this.pagesCount <= 5) {
                    let start = this.currentPage + 3 >= this.pagesCount ? 1 : this.currentPage;
                    return range(start, this.pagesCount);
                } else {
                    let start = this.pagesCount - 4;
                    return range(start, this.pagesCount);
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    .pagination-list {
        display: flex;
        flex-wrap: wrap;
        column-gap: 12px;
        & > li {
            @media(min-width: 767px) {
                &:first-child {
                margin-right: 8px;
                }
                &:last-child {
                    margin-left: 8px;
                }
            }
        }
    }
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        padding: 0;
        border-radius: 3px;
        border: none;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        color: $grey-color;
        background-color: $white-color;
        transition: $base-transition;
        cursor: pointer;
        &.active,
        &:not(.more):hover,
        &:not(.more):focus {
            color: $white-color;
            background-color: $accent-color;
        }
        &.nav-btn {
            border: 1px solid $accent-color;
            color: $accent-color;
            background: $white-color;
            &:hover {
                color: $white-color;
                background: $accent-color;
            }
        }
        &.disabled,
        &.active {
            pointer-events: none;
        }
        &.more {
            cursor: default;
        }
        &.disabled {
            opacity: 0.7;
        }
        svg {
            font-size: 16px;
        }
    }
    @media(max-width: $mobile) {
        margin-top: 40px;
    }
    @media(max-width: 540px) {
        .pagination-list {
            column-gap: 4px;
        }
        .item {
            width: 28px;
            height: 28px;
            font-size: 14px;
            line-height: 20px;
            svg {
                font-size: 14px;
            }
        }
    }
}
</style>