<template>
    <router-link class="platform-billet card1"
        :to="{ name: 'platformItem', params: { slug: `${platform.slug}` } }">
        <span class="img-container">
            <img :src="platform.image_background" :alt="platform.name">
        </span>
        <span class="concise-info">
            <span class="title ellipsis-multiply one">{{ platform.name }}</span>
        </span>
    </router-link>
</template>

<script>

export default {
    name: 'ComPlatformBilletCard1',
    props: {
        platform: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.platform-billet.card1 {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;

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