<template>
    <header class="header">
        <div class="container">
            <div class="inner">
                <router-link :to="{ name: 'home' }" class="site-logo">
                    <img src="@/assets/images/logo.svg" alt="logo">
                </router-link>
                <com-nav-menu />
                <div class="search-container">
                    SEARCH
                </div>
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

    @media(max-width: $tablet) {
        padding: 20px 0;
    }

    @media(max-width: $mobile) {
        padding: 16px 0;
    }
}
</style>