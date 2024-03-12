<template>
    <div class="single-item-info">
        <div class="heading-container">
            <com-heading :title-content="`${singleItemData.name}`" />
        </div>
        <div class="single-item-info_content">
            <div class="img-container">
                <img :src="singleItemData.image_background" />
            </div>
            <div v-if="singleItemData.description" v-html="singleItemData.description" class="default-styles"></div>
        </div>
    </div>
</template>

<script>
import ComHeading from "@/components/partials/Heading";

export default {
    name: 'ComSingleItemInfo',
    components: {
        ComHeading,
    },
    props: {
        singleItemData: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.single-item-info {
    .heading-container {
        margin: 40px 0 20px;
    }

    .single-item-info_content {
        max-width: 960px;
        margin: 0 auto;
    }

    .img-container {
        display: flex;
        width: 100%;
        height: 450px;

        img {
            border-radius: 10px;
        }
    }

    .default-styles {
        margin-top: 20px;
    }

    @media(max-width: 1024px) {
        .plarform-item_content {
            max-width: 760px;
        }

        .img-container {
            height: 350px;
        }
    }

    @media(max-width: 767px) {
        .img-container {
            height: 280px;
        }

        .heading-container {
            margin: 20px 0 15px;
        }
    }

    @media(max-width: 480px) {
        .img-container {
            height: auto;
        }
    }
}
</style>