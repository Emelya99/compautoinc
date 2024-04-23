<template>
    <section class="platforms_section">
        <div class="container">
            
            <com-heading
                title-content="All Platforms"
                text-content="Explore gaming across platforms — consoles, PCs, mobile — for your ideal setup with the latest releases." 
            />

            <com-error-message v-if="error" :error-message="error" />

            <div v-if="parentPlatforms" class="platforms_content">
                <div class="item" v-for="parentPlatform in parentPlatforms.results" :key="parentPlatform.id">
                    <h3 class="title small">{{ parentPlatform.name }}</h3>
                    <ul class="grid-list style-1">
                        <li v-for="platform in parentPlatform.platforms" :key="platform.id">
                            <com-platform-billet-card1 :platform="platform" />
                        </li>
                    </ul>
                </div>
            </div>

            <ul v-if="isLoading" class="grid-list style-1">
                <li v-for="index in 12" :key="index">
                    <com-steleton-card2 />
                </li>
            </ul>

            <com-pagination 
                v-if="parentPlatforms" 
                :total="parentPlatforms.count" 
                :limit="limit" 
                :current-page="currentPage" 
                :url="baseUrl"
            />
            
        </div>
    </section>
</template>
  
<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/platforms/parentPlatforms";
import { scrollToTop } from '@/helpers/utils';
import { PLATFORMS_PAGINATION_LIMIT as limit } from "@/helpers/vars";
import ComHeading from "@/components/partials/Heading";
import ComPlatformBilletCard1 from '@/components/billets/platform-billets/card1/PlatformBilletCard1';
import ComSteletonCard2 from '@/components/billets/partials/steletons/SkeletonCard2';
import ComPagination from '@/components/paginations/Pagination';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComPlatformsPage',
    components: {
        ComHeading,
        ComPlatformBilletCard1,
        ComSteletonCard2,
        ComPagination,
        ComErrorMessage,
    },
    computed: {
        ...mapState({
            isLoading: state => state.parentPlatforms.isLoading,
            parentPlatforms: state => state.parentPlatforms.data,
            error: state => state.parentPlatforms.error
        }),
        limit() {
            return limit;
        },
        currentPage() {
            return Number(this.$route.query.page || '1');
        },
        baseUrl() {
            return this.$route.path;
        },
    },
    watch: {
        currentPage() {
            scrollToTop();
            this.getPlatforms();
        },
    },
    mounted() {
        this.getPlatforms();
    },
    methods: {
        getPlatforms() {
            this.$store.dispatch(actionTypes.getParentPlatforms, { pageSize: this.limit, page: this.currentPage });
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.platforms_section {
    padding-top: 30px;
    .title.small {
        @include margin-bottom(20px,null,15px);
    }
    .heading-container {
        margin-bottom: 40px;
    }
    .platforms_content {
        .item {
            &:not(:last-child) {
                @include margin-bottom(60px,null,40px);
            }
        }
    }
    @media(max-width: $tablet) {
        padding-top: 10px;
    }
    @media(max-width: $mobile) {
        padding-top: 5px;
    }
}
</style>