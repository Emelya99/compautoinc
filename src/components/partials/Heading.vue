<template>
    <div class="heading-container">
        <h2 class="title default">{{ titleContent }}</h2>
        <p class="text" v-if="textContent">{{ textContent }}</p>
    </div>
</template>

<script>
export default {
    name: 'ComHeading',
    props: {
        titleContent: {
            type: String,
            required: true,
        },
        textContent: {
            type: String,
            required: false,
        }
    }
}
</script>

<style lang="scss" scoped>
    .heading-container {
        position: relative;
        padding-left: 12px;
        &::after {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 2px;
            height: 38px;
            background: $accent-color;
            @media(max-width: $tablet) {
                height: 34px;
            }
            @media(max-width: $mobile) {
                height: 26px;
            }
        }
    }
    .text {
        max-width: 471px;
    }

    @media(max-width: $tablet) {
        .title {
            margin-bottom: 5px;
        }
        .text {
            max-width: 310px;
            font-size: 14px;
        }
    }
    @media(max-width: 580px) {
        .text {
            max-width: initial;
            font-size: 12px;
            line-height: 15px;
        }
    }
</style>