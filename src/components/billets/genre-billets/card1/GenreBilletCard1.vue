<template>
    <router-link
        class="genre-billet card1"
        :to="{ name: 'genreItem', params: { slug: `${genre.slug}` } }"
    >
        <span class="img-container">
            <img 
                :src="genre.image_background ? genre.image_background : require('@/assets/images/placeholder-game.jpg')" 
                :alt="`${genre.name} background image`"
                loading="lazy"
            >
        </span>
        <span class="concise-info">
            <span class="title ellipsis-multiply one">{{ genre.name }}</span>
        </span>
    </router-link>
</template>

<script>

export default {
    name: 'ComGenreBilletCard1',
    props: {
        genre: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.genre-billet.card1 {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;

    &:hover,
    &:focus {
        transform: scale(1.01);
        box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.60);
    }

    .img-container {
        position: relative;
        width: 100%;
        height: 120px;
        z-index: 0;
        &::after {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(23, 23, 23, 0.30) 0%, rgba(23, 23, 23, 0.90) 100%);
        }
    }

    .concise-info {
        z-index: 2;
    }

    .title {
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: calc(100% - 40px);
        margin: 0;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: $white-color;
        transition: $base-transition;
    }
}
</style>