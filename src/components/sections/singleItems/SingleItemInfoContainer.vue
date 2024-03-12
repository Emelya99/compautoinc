<template>
    <div>
        <com-single-item-info-skeleton v-if="singleItemIsLoading" />
        <com-single-item-info 
            v-if="singleItemData" 
            :singleItemData="singleItemData"
        />
        <com-error-message v-if="singleItemError" :errorMessage="singleItemError" />
    </div>
</template>

<script>
import ComSingleItemInfo from "@/components/sections/singleItems/SingleItemInfo";
import ComSingleItemInfoSkeleton from "@/components/sections/singleItems/SingleItemInfoSkeleton";
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