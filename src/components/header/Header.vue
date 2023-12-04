<template>
    <header class="header">
        <div class="container">
            <div class="inner">
                <router-link :to="{ name: 'home' }" class="site-logo">
                    <img src="@/assets/images/logo.svg" alt="logo">
                </router-link>
                <com-nav-menu :isMenuOpened="isMenuOpened" @toggleMenu="toggleMenu" />
                <div class="search-container">
                    SEARCH
                </div>
                <button class="burger-btn" @click="toggleMenu">
                    <svg class="svg-icons">
                        <use xlink:href="@/assets/images/icons.svg#burger-btn"></use>
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import ComNavMenu from '@/components/header/NavMenu';

export default {
    name: 'ComHeader',
    components: {
        ComNavMenu
    },
    data() {
        return {
            isMenuOpened: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpened = !this.isMenuOpened;
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.header {
    position: relative;
    padding: 25px 0;
    z-index: 20;
    .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .burger-btn {
        display: none;
    }
    @media(max-width: $tablet) {
        padding: 20px 0;
        .burger-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 6px;
            color: $white-color;
            background: $accent-color;
            &:hover {
                color: $accent-color;
                background: $white-color;
            }
            svg {
                font-size: 24px;
            }
        }
    }
    @media(max-width: $mobile) {
        padding: 16px 0;
        .burger-btn {
            width: 28px;
            height: 28px;
            svg {
                font-size: 16px;
            }
        }
    }
}
</style>