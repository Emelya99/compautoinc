<template>
    <router-link 
        class="app-billet card2"
        :to="{ name: 'app', params: { slug: `${product.slug}`}}"
    >
        <span class="img-container">
            <img v-if="product.background_image" :src="product.background_image" :alt="product.name">
            <img v-else src="@/assets/images/placeholder-game.png" :alt="product.name">
        </span>
        <span class="concise-info">
            <span class="title ellipsis-multiply one">{{ product.name }}</span>
            <span class="rating-box">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#rating-star"></use>
                </svg>
                {{ product.rating }}
            </span>
            <span class="text ellipsis-multiply eight">{{ product.description_raw }}</span>
            <span class="default-btn">
                Read more
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#btn-arrow"></use>
                </svg>
            </span>
        </span>
    </router-link>
</template>

<script>
export default {
    name: 'ComAppBilletCard2',
    props: {
        product: {
            type: Object,
            required: true,
        }
    }
}
</script>


<style scoped lang="scss">
@import "@/styles/variables.scss";

.app-billet.card2 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    &:hover,
    &:focus {
        .title {
            color: $accent-color;
        }
        .default-btn {
            color: $accent-color;
            background: $white-color;
        }
    }
    .img-container {
        width: calc(100% - 522px);
        height: 393px;
        img {
            border-radius: 5px;
        }
    }
    .concise-info {
        display: flex;
        flex-direction: column;
        width: 522px;
        padding-left: 40px;
    }
    .title {
        margin-bottom: 20px;
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        color: $main-color;
        transition: $base-transition;
    }

    .rating-box {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: $main-color;
        svg {
            margin-right: 5px;
            font-size: 31px;
            color: $accent-color;
        }
    }

    .text {
        margin-bottom: 40px;
        font-size: 16px;
        line-height: 20px;
        color: $text-color;
    }

    .default-btn {
        color: $white-color;
        background: $accent-color;
        transition: $base-transition;
    }

    @media(max-width: $tablet) {
        .img-container {
            width: 50%;
            padding-right: 10px;
            height: 270px;
        }

        .concise-info {
            width: 50%;
            padding-left: 20px;
        }

        .title {
            margin-bottom: 10px;
            font-size: 20px;
            line-height: 26px;
        }

        .rating-box {
            margin-bottom: 25px;
            font-size: 18px;
            line-height: 22px;
            svg {
                font-size: 22px;
            }
        }

        .text {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 18px;
            &.ellipsis-multiply {
                -webkit-line-clamp: 7;
            }
        }
    }

    @media(max-width: $mobile) {
        .concise-info {
            padding-left: 10px;
        }
    }

    @media(max-width: 540px) {
        .img-container {
            width: 100%;
            height: 220px;
            margin-bottom: 20px;
            padding: 0;

        }
        .concise-info {
            width: 100%;
            padding: 0;
        }

        .title {
            font-size: 18px;
            line-height: 23px;
        }

        .rating-box {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 18px;
            svg {
                font-size: 18px;
            }
        }

        .text {
            &.ellipsis-multiply {
                -webkit-line-clamp: 8;
            }
        }
    }
}
</style>