<template>
    <div class="screens_block">

        <com-heading title-content="Screenshots" />

        <com-error-message v-if="error" :error-message="error" />

        <div v-if="screens">
            <swiper
                :slides-per-view="2.5"
                :space-between="20"
                :loop="true"
                :navigation="{
                    nextEl: '#swiper-next',
                    prevEl: '#swiper-prev'
                }"
                :breakpoints="{
                    0: { slidesPerView: 1.5 },
                    561: { slidesPerView: 2.5 },
                }"
            >
                <swiper-slide v-for="screen in screens" :key="screen.id">
                    <div class="img-container">
                        <img :src="screen.image" :alt="`screen ${screens.id}`" loading="lazy">
                    </div>
                </swiper-slide>
            </swiper>

            <div id="swiper-prev" class="swiper-button-prev"></div>
            <div id="swiper-next" class="swiper-button-next"></div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import { actionTypes } from "@/store/modules/products/productPage/screensBlock";

import { Navigation } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";

import ComHeading from '@/components/partials/Heading';
import ComErrorMessage from "@/components/partials/ErrorMessage";

SwiperCore.use([Navigation]);

export default {
    name: 'ComScreensBlock',
    props: {
        slug: {
            type: String,
            required: true,
        }
    },
    components: {
        ComHeading,
        ComErrorMessage,
        Swiper,
        SwiperSlide,
    },
    computed: {
        ...mapState({
            isLoading: state => state.screensBlock.isLoading,
            screens: state => state.screensBlock.data,
            error: state => state.screensBlock.error,
        }),
    },
    mounted() {
        this.$store.dispatch(actionTypes.getScreens, { slug: this.slug });
    },
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";

.screens_block {
    position: relative;
    .img-container {
        height: 300px;
        img {
            border-radius: 10px;
        }
    }
    .swiper-container {
        overflow: initial;
        overflow-x: clip;
    }
    .swiper-button-prev,
    .swiper-button-next {
        top: 0;
        left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        margin: 0;
        border-radius: 5px;
        color: $white-color;
        background: $accent-color;
        transition: $base-transition;
        &::after {
            font-size: 16px;
            line-height: 1;
        }
        &:hover {
            background: #4CAF50;
        }
    }
    .swiper-button-prev {
        right: 46px;
    }
    .swiper-button-next {
        right: 0;
    }
    @media(max-width: 1024px) {
        .img-container {
            height: 220px;
        }
        .swiper-button-prev,
        .swiper-button-next {
            width: 34px;
            height: 34px;
        }
        .swiper-button-prev {
            right: 44px;
        }
    }
    @media(max-width: 767px) {
        .img-container {
            height: 190px;
        }
        .swiper-button-prev,
        .swiper-button-next {
            width: 26px;
            height: 26px;
        }
        .swiper-button-prev {
            right: 36px;
        }
    }
}
</style>