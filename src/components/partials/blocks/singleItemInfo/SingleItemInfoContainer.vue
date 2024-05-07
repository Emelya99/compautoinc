<template>
    <div>
        <com-single-item-info-skeleton v-if="singleItemIsLoading" />

        <com-error-message v-if="singleItemError" :error-message="singleItemError" />

        <com-single-item-info 
            v-if="singleItemData" 
            :singleItemData="singleItemData"
        />
    </div>
</template>

<script>
import ComSingleItemInfo from "@/components/partials/blocks/singleItemInfo/SingleItemInfo";
import ComSingleItemInfoSkeleton from "@/components/partials/blocks/singleItemInfo/SingleItemInfoSkeleton";
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComSingleItemInfoContainer',
    components: {
        ComSingleItemInfo,
        ComSingleItemInfoSkeleton,
        ComErrorMessage,
    },
    props: {
        singleItemIsLoading: {
            type: Boolean,
            required: false,
        },
        singleItemData: {
            type: Object,
            required: false,
        },
        singleItemError: {
            type: String,
            required: false,
        },
    },
}
</script>