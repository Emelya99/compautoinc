<template>
    <div>
        <com-error-message v-if="error" :error-message="error" />

        <ul v-if="isLoading" class="grid-list style-1">
            <li v-for="index in skeletonCount" :key="index">
                <com-steleton-card2 />
            </li>
        </ul>

        <ul v-if="genresData" class="grid-list style-1">
            <li v-for="genre in genresData" :key="genre.id">
                <com-genre-billet-card1 :genre="genre" />
            </li>
        </ul>
    </div>
</template>

<script>
import ComGenreBilletCard1 from '@/components/billets/genre-billets/card1/GenreBilletCard1';
import ComSteletonCard2 from '@/components/billets/partials/steletons/SkeletonCard2';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: 'ComGenresBlockContainer',
    components: {
        ComGenreBilletCard1,
        ComSteletonCard2,
        ComErrorMessage,
    },
    props: {
        isLoading: {
            type: Boolean,
            required: false,
        },
        genresData: {
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