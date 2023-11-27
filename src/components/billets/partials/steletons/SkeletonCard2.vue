<template>
    <content-loader class="content-loader" :width="388" :height="120" :speed="2" primaryColor="#f3f3f3"
        secondaryColor="#ecebeb">
        <rect x="20" y="76" rx="10" ry="10" width="170" height="24" />
    </content-loader>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
    name: 'ComSteletonCard2',
    components: {
        ContentLoader
    }
}
</script>

<style lang="scss" scoped>
.content-loader {
    height: 120px;
}
</style>