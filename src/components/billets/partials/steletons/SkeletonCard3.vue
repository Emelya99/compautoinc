<template>
    <content-loader v-if="isDesktop" class="content-loader" :width="loaderWidth || 320" :height="loaderHeight || 128"
        :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb">
        <rect x="20" y="20" rx="10" ry="10" width="75" height="88" />
        <rect x="115" y="20" rx="10" ry="10" width="181" height="16" />
        <rect x="115" y="41" rx="10" ry="10" width="181" height="16" />
        <rect x="115" y="78" rx="10" ry="10" width="78" height="20" />
    </content-loader>
    <content-loader v-else class="content-loader" :width="loaderWidth || 220" :height="loaderHeight || 80" :speed="2"
        primaryColor="#f3f3f3" secondaryColor="#ecebeb">
        <rect x="10" y="10" rx="10" ry="10" width="46" height="60" />
        <rect x="66" y="10" rx="10" ry="10" width="140" height="14" />
        <rect x="66" y="29" rx="10" ry="10" width="140" height="14" />
        <rect x="66" y="53" rx="10" ry="10" width="50" height="14" />
    </content-loader>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
import { isDesktop } from "@/helpers/utils";

export default {
    name: 'ComSteletonCard3',
    components: {
        ContentLoader
    },
    computed: {
        isDesktop() {
            return isDesktop;
        },
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
@import "@/styles/variables.scss";

.content-loader {
    width: 100%;
    height: 128px;

    @media(max-width: $tablet) {
        height: 80px;
    }
}
</style>