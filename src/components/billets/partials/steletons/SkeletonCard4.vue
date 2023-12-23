<template>
    <content-loader v-if="isDesktop" class="content-loader" :width="loaderWidth || 846" :height="loaderHeight || 550"
        :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb">
        <rect x="30" y="30" rx="10" ry="10" width="95" height="36" />
        <rect x="140" y="30" rx="10" ry="10" width="95" height="36" />
        <rect x="30" y="482" rx="10" ry="10" width="480" height="38" />
    </content-loader>
    <content-loader v-else class="content-loader" :width="loaderWidth || 694" :height="loaderHeight || 348" :speed="2"
        primaryColor="#f3f3f3" secondaryColor="#ecebeb">
        <rect x="20" y="20" rx="10" ry="10" width="95" height="28" />
        <rect x="125" y="20" rx="10" ry="10" width="95" height="28" />
        <rect x="20" y="308" rx="10" ry="10" width="200" height="20" />
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
    height: 550px;

    @media(max-width: $tablet) {
        height: 348px;
    }
}
</style>