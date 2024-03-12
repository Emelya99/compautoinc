<template>
    <content-loader class="content-loader" :width="960" :height="462"
        :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb">
        <rect x="0" y="0" rx="10" ry="10" width="960" height="350" />
        <rect x="0" y="370" rx="10" ry="10" width="960" height="24" />
        <rect x="0" y="400" rx="10" ry="10" width="960" height="24" />
        <rect x="0" y="430" rx="10" ry="10" width="960" height="24" />
    </content-loader>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
    name: 'ComSingleItemInfoSkeleton',
    components: {
        ContentLoader
    },
}
</script>

<style lang="scss" scoped>

.content-loader {
    max-width: 960px;
    margin: 0 auto;
    height: 462px;
    background: transparent;
    @media(max-width: 860px) {
        height: 350px;
    }
    @media(max-width: 767px) {
        height: 250px;
    }
    @media(max-width: 540px) {
        height: 180px;
    }
}
</style>