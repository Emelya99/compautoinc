<template>
    <div class="top-product_block">
        <div class="img-container">
            <img v-if="product.background_image" :src="product.background_image" :alt="`${product.slug} logo`">
            <img v-else src="@/assets/images/placeholder-game.jpg" alt="placeholder image">
        </div>
        <div class="concise-info">
            <h1 class="title small">
                {{ product.name }}
            </h1>
            <span class="rating-box" v-if="product.rating != 0">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#rating-star"></use>
                </svg>
                {{ product.rating }}
            </span>
        </div>
        <div v-if="product.description" v-html="product.description" class="text default-styles"></div>
    </div>
</template>

<script>

export default {
    name: 'ComTopProductBlock',
    props: {
        product: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.top-product_block {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .img-container {
        width: 100px;
        height: 116px;
        img {
            border-radius: 10px;
        }
    }
    .concise-info {
        widows: calc(100% - 100px);
        padding-left: 25px;
    }
    .title.small {
        margin: 0;
    }
    .rating-box {
        display: flex;
        align-items: center;
        margin-top: 10px;
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
    .text {
        width: 100%;
        margin-top: 25px;
        font-size: 16px;
        line-height: 20px;
    }
    @media(max-width: 1024px) {
        .img-container {
            width: 109px;
            height: 109px;
        }
        .concise-info {
            width: calc(100% - 109px);
            padding-left: 20px;
        }
        .rating-box {
            margin-top: 5px;
        }
        .text {
            margin-top: 20px;
            font-size: 14px;
            line-height: 18px;
        }
    }
    @media(max-width: 767px) {
        align-items: flex-start;
        .img-container {
            width: 80px;
            height: 80px;
        }
        .concise-info {
            width: calc(100% - 80px);
            padding-left: 16px;
        }
        .title.small {
            font-size: 16px;
            line-height: 20px;
        }
        .rating-box {
            font-size: 14px;
            line-height: 18px;
            svg {
                width: 16px;
                height: 16px;
            }
        }
        .text {
            margin-top: 16px;
        }
    }
}
</style>