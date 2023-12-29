<template>
    <router-link
        class="app-billet card3"
        :to="{ name: 'app', params: { slug: `${product.slug}` } }"
    >
        <span class="img-container">
            <img v-if="product.background_image" :src="product.background_image" :alt="product.name">
            <img v-else src="@/assets/images/placeholder-game.png" :alt="product.name">
        </span>
        <span class="concise-info">
            <span class="title ellipsis-multiply">{{ product.name }}</span>
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
    name: 'ComAppBilletCard3',
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
}

</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";
.app-billet.card3 {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-right: 4px solid transparent;
    border-radius: 5px;

    &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: rgba(76, 175, 80, 0.20);
        border-radius: 5px 5px 0 0;
        transition: $base-transition;
    }

    &:hover,
    &:focus {
        border-radius: 5px 0 0 5px;
        border-right: 4px solid $accent-color;
        background: rgba(76, 175, 80, 0.10);

        &::after {
            opacity: 0;
        }
    }

    .img-container {
        width: 70px;
        height: 88px;
        img {
            border-radius: 5px;
        }
    }

    .concise-info {
        flex: 1;
        padding-left: 20px;
    }

    .title {
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: $main-color;
    }

    .rating-box {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: $main-color;

        svg {
            width: 24px;
            height: 24px;
            margin-right: 5px;
            color: $accent-color;
        }
    }

    @media(max-width: $tablet) {
        padding: 10px;

        .img-container {
            width: 46px;
            height: 60px;
        }

        .concise-info {
            padding-left: 10px;
        }

        .title {
            margin-bottom: 5px;
            font-size: 14px;
            line-height: 18px;
        }

        .rating-box {
            font-size: 14px;
            line-height: 18px;
            svg {
                width: 16px;
                height: 16px;
            }
        }
    }
}
</style>