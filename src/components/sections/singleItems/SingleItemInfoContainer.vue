<template>
    <div class="container">
        <div v-if="singleItemIsLoading">
            Loading...
        </div>
        <com-single-item-info 
            v-if="singleItemData" 
            :singleItemData="singleItemData"
        />
        <com-error-message v-if="singleItemError" :errorMessage="singleItemError" />
    </div>
</template>

<script>
import ComSingleItemInfo from "@/components/sections/singleItems/SingleItemInfo";
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComSingleItemInfoContainer',
    components: {
        ComSingleItemInfo,
        ComErrorMessage
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