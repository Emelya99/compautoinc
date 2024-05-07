<template>
    <div class="short-info_block">
        <div v-if="product.platforms" class="item">
            <com-heading title-content="Platforms" />
            <ul class="short-info_list">
                <li v-for="platform in product.platforms" :key="platform.platform.id">
                    <span class="info-btn platform">{{ platform.platform.name }}</span>
                </li>
            </ul>
        </div>
        <div v-if="product.genres" class="item">
            <com-heading title-content="Genres" />
            <ul class="short-info_list">
                <li v-for="genre in product.genres" :key="genre.id">
                    <span class="info-btn genre">{{ genre.name }}</span>
                </li>
            </ul>
        </div>
        <div v-if="product.tags" class="item">
            <com-heading title-content="Tags" />
            <ul class="short-info_list">
                <li v-for="tag in product.tags" :key="tag.id">
                    <span class="info-btn tag">{{ tag.name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ComHeading from '@/components/partials/Heading';

export default {
    name: 'ComShortInfoBlock',
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    components: {
        ComHeading,
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.short-info_block {
    .item {
        &:not(:last-child) {
            margin-bottom: 40px;
        }
    }
    .heading-container {
        margin-bottom: 20px;
    }
    .short-info_list {
        display: flex;
        flex-wrap: wrap;
        width: calc(100% + 10px);
        margin: -5px;
        & > li {
            padding: 5px;
        }
    }
    @media(max-width: 1200px) {
        .item {
            &:not(:last-child) {
                margin-bottom: 30px;
            }
        }
        .heading-container {
            margin-bottom: 15px;
        }
    }
}
</style>