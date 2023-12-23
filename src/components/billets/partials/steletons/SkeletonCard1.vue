<template>
    <content-loader class="content-loader" :width="loaderWidth || 388" :height="loaderHeight || 160" :speed="2" primaryColor="#f3f3f3"
        secondaryColor="#ecebeb">
        <rect x="20" y="20" rx="10" ry="10" width="95" height="28" />
        <rect x="125" y="20" rx="10" ry="10" width="95" height="28" />
        <rect x="20" y="116" rx="10" ry="10" width="246" height="24" />
        <rect x="311" y="116" rx="10" ry="10" width="60" height="24" />
    </content-loader>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
    name: 'ComSteletonCard1',
    components: {
        ContentLoader
    },
    data() {
        return {
            loaderWidth: null,
            loaderHeight: null
        };
    },
    mounted() {
        this.loaderWidth = this.$el.clientWidth;
        this.loaderHeight = this.$el.clientHeight;
    },
}
</script>

<style lang="scss" scoped>
.content-loader {
    height: 160px;
}
</style>