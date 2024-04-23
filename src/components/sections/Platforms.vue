<template>
    <section class="platforms_section section">
        <div class="container">

            <div class="top-part-section">
                <div class="left-part">
                    <com-heading 
                        title-content="Chose your platform"
                        text-content="Our blog has selected game reviews for all platforms and operating systems" 
                    />
                </div>
                <div class="right-part">
                    <router-link class="default-btn background" :to="{ name: 'platforms' }">
                        More platforms
                        <svg class="svg-icons">
                            <use xlink:href="@/assets/images/icons.svg#btn-arrow"></use>
                        </svg>
                    </router-link>
                </div>
            </div>

            <com-error-message v-if="error" :error-message="error" />

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
import { actionTypes } from "@/store/modules/platforms/allPlatforms";
import ComHeading from "@/components/partials/Heading";
import ComPlatformBilletCard1 from '@/components/billets/platform-billets/card1/PlatformBilletCard1';
import ComSteletonCard2 from '@/components/billets/partials/steletons/SkeletonCard2';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComPlatforms',
    components: {
        ComHeading,
        ComPlatformBilletCard1,
        ComSteletonCard2,
        ComErrorMessage
    },
    computed: {
        ...mapState({
            isLoading: state => state.allPlatforms.isLoading,
            platforms: state => state.allPlatforms.data,
            error: state => state.allPlatforms.error
        }),
    },
    mounted() {
        if (!this.platforms) {
            this.$store.dispatch(actionTypes.getAllPlatforms, { pageSize: 6 });
        }
    }
}
</script>