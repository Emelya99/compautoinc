<template>
    <div>
        <com-error-message v-if="error" :error-message="error" />

        <ul v-if="isLoading" class="grid-list style-1">
            <li v-for="index in skeletonCount" :key="index">
                <com-skeleton-card1 />
            </li>
        </ul>

        <ul v-if="productsData" class="grid-list style-1">
            <li v-for="product in productsData" :key="product.id">
                <com-app-billet-card1 :product="product" />
            </li>
        </ul>
    </div>
</template>

<script>
import ComAppBilletCard1 from "@/components/billets/app-billets/card1/AppBilletCard1";
import ComSkeletonCard1 from '@/components/billets/partials/steletons/SkeletonCard1';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComProductsBlockContainer',
    components: {
        ComAppBilletCard1,
        ComSkeletonCard1,
        ComErrorMessage
    },
    props: {
        isLoading: {
            type: Boolean,
            required: false,
        },
        productsData: {
            type: Array,
            required: false,
        },
        error: {
            type: String,
            required: false,
        },
        skeletonCount: {
            type: Number,
            required: true,
        }
    }
}
</script>