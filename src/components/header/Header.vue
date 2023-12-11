<template>
    <header class="header">
        <div class="container">
            <div class="inner">

                <!-- Logo -->
                <router-link :to="{ name: 'home' }" class="site-logo">
                    <img src="@/assets/images/logo.svg" alt="logo">
                </router-link>

                <!-- Nav Menu -->
                <div class="nav-menu_container">
                    <com-nav-menu />
                </div>

                <!-- Search Box -->
                <com-search-box />

            </div>
        </div>
    </header>
</template>

<script>
import ComNavMenu from '@/components/header/NavMenu';
import ComSearchBox from '@/components/header/SearchBox';

export default {
    name: 'ComHeader',
    components: {
        ComNavMenu,
        ComSearchBox,
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
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media(max-width: 1180px) {
        .nav-menu_container {
            order: 1;
        }
    }

    @media(max-width: $tablet) {
        padding: 20px 0;
    }

    @media(max-width: $mobile) {
        padding: 16px 0;
    }
}
</style>