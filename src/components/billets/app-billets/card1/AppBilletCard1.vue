<template>
    <router-link class="app-billet card1" :to="{ name: 'app', params: { slug: `${product.slug}` } }">
        <span class="img-container">
            <img v-if="product.background_image" :src="product.background_image" :alt="product.name">
            <img v-else src="@/assets/images/placeholder-game.png" alt="default-img">
        </span>
        <span class="concise-info">
            <ul class="platforms_list" v-if="product.parent_platforms">
                <li v-for="(platform) in product.parent_platforms" :key="platform.platform.name">
                    <span>{{ platform.platform.name }}</span>
                </li>
            </ul>
            <span class="title ellipsis-multiply one">{{ product.name }}</span>
            <span class="rating-box" v-if="product.rating != 0">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#rating-star"></use>
                </svg>
                {{ product.rating }}
            </span>
        </span>
    </router-link>
</template>

<script>

export default {
    name: 'ComAppBilletCard1',
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
}

</script>

<style scoped lang="scss">
.app-billet.card1 {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;

    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: linear-gradient(180deg, rgba(23, 23, 23, 0.10) 0%, rgba(23, 23, 23, 0.70) 100%);
        transition: $base-transition;
    }

    &:hover,
    &:focus {
        &::after {
            background: linear-gradient(180deg, rgba(23, 23, 23, 0.10) 0%, rgba(23, 23, 23, 0.90) 100%);
            transition: $base-transition;
        }
    }

    .img-container {
        position: relative;
        width: 100%;
        height: 160px;
        z-index: 0;
    }

    .concise-info {
        z-index: 2;
    }

    .title {
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: calc(100% - 110px);
        margin: 0;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: $white-color;
    }

    .platforms_list {
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        top: 0;
        left: 0;
        padding: 20px;
        width: 100%;

        &>li {
            margin: 0 10px 10px 0;

            span {
                display: inline-block;
                padding: 4px 12px;
                border-radius: 10px;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: $white-color;
                background: rgba(76, 175, 80, 0.85);
            }
        }
    }

    .rating-box {
        position: absolute;
        display: flex;
        align-items: center;
        bottom: 20px;
        right: 20px;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: $white-color;

        svg {
            width: 24px;
            height: 24px;
            margin-right: 5px;
            color: $accent-color;
        }
    }

    @media(max-width: 640px) {

        .platforms_list {
            padding: 20px 16px;
        }

        .title {
            left: 16px;
            font-size: 16px;
            line-height: 20px;
        }

        .rating-box {
            right: 16px;
            bottom: 18px;
            font-size: 14px;
            line-height: 18px;
        }
    }
}</style>