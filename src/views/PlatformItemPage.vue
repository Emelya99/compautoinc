<template>
    <div>
        <com-single-item-info-container
            :singleItemIsLoading="singlePlatformIsLoading"
            :singleItemData="singlePlatformData"
            :singleItemError="singlePlatformError"
        />
        <section>
            <div class="container">
                
            </div>
        </section>
    </div>

</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/platforms/singlePlatform";
import { scrollToTop } from '@/helpers/utils';
import ComSingleItemInfoContainer from "@/components/sections/singleItems/SingleItemInfoContainer";

export default {
    name: 'ComPlatformItemPage',
    components: {
        ComSingleItemInfoContainer
    },
    computed: {
        ...mapState({
            singlePlatformIsLoading: state => state.singlePlatform.isLoading,
            singlePlatformData: state => state.singlePlatform.data,
            singlePlatformError: state => state.singlePlatform.error
        }),
        slug() {
            return this.$route.params.slug;
        }
    },
    watch: {
        slug() {
            this.getSinglePlatformItem();
        }
    },
    mounted() {
        this.getSinglePlatformItem();
    },
    methods: {
        getSinglePlatformItem() {
            scrollToTop();
            this.$store.dispatch(actionTypes.getSinglePlatform, { slug: this.slug });
        }
    }
}
</script>