<template>
    <section class="platforms_section section">
        <div class="container">
            <com-heading title-content="Chose your platform"
                text-content="Our blog has selected game reviews for all platforms and operating systems" />
            <div v-if="error">
                {{ error }}
            </div>
            <ul v-if="isLoading" class="grid-list style-1">
                <li v-for="index in 6" :key="index">
                    <com-steleton-card2 />
                </li>
            </ul>
            <ul v-if="platforms" class="grid-list style-1">
                <li v-for="platform in platforms" :key="platform.id">
                    <com-platform-billet-card1 :platform="platform" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/platforms";
import ComHeading from "@/components/partials/Heading";
import ComPlatformBilletCard1 from '@/components/billets/platform-billets/card1/PlatformBilletCard1';
import ComSteletonCard2 from '@/components/billets/partials/steletons/SkeletonCard2';

export default {
    name: 'ComPlatforms',
    components: {
        ComHeading,
        ComPlatformBilletCard1,
        ComSteletonCard2
    },
    computed: {
        ...mapState({
            isLoading: state => state.platforms.isLoading,
            platforms: state => state.platforms.data,
            error: state => state.platforms.error
        }),
    },
    mounted() {
        if (!this.platforms) {
            this.$store.dispatch(actionTypes.getPlatforms, { countPage: 6 });
        }
    }
}
</script>