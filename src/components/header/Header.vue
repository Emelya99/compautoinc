<template>
    <header class="header">
        <div class="container">
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'reviews' }">Reviews</router-link>
            <router-link :to="{ name: 'platforms' }">Platforms</router-link>
            <router-link :to="{ name: 'genres' }">Genres</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'ComHeader',
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.header {
    padding: 20px 0 200px;
}
.router-link-exact-active {
    font-weight: 700;
    color: $accent-color;
}
</style>