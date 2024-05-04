<template>
    <div class="comments_block">

        <com-heading title-content="Reddit Topics" />

        <com-error-message v-if="error" :error-message="error" />

        <div class="comments_box" v-if="comments">
            <ul class="comments_list">
                <li v-for="comment in comments.results" :key="comment.id">
                    <div class="comment_item">
                        <div class="img-container">
                            <a v-if="comment.username_url" :href="comment.username_url" target="_blank">
                                <img v-if="comment.image" :src="comment.image" :alt="`${comment.username} avatar`" loading="lazy">
                                <img v-else src="@/assets/images/placeholder-user.jpg" :alt="`${comment.username} avatar`" loading="lazy">
                            </a>
                            <span v-else>
                                <img v-if="comment.image" :src="comment.image" :alt="`${comment.username} avatar`" loading="lazy">
                                <img v-else src="@/assets/images/placeholder-user.jpg" :alt="`${comment.username} avatar`" loading="lazy">
                            </span>
                        </div>
                        <div class="comment-info">
                            <div>
                                <a v-if="comment.username_url" class="name link" :href="comment.username_url" target="_blank">{{ comment.username }}</a>
                                <p v-else class="name">{{ comment.username }}</p>
                            </div>
                            <p class="date"> {{ formatDate(comment.created) }}</p>
                            <a class="title" :href="comment.url" target="_blank">{{ comment.name }}</a>
                            <div v-if="comment.text" v-html="comment.text" class="text default-styles"></div>
                        </div>
                    </div>
                </li>
            </ul>

            <div v-if="commentsLink" class="btn-container center">
                <a class="default-btn auto-size background" :href="commentsLink" target="_blank">
                    More comments
                    <svg class="svg-icons">
                        <use xlink:href="@/assets/images/icons.svg#btn-arrow"></use>
                    </svg>
                </a>
            </div>

        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import { APP_PAGE_COMMENTS_LIMIT as limit } from "@/helpers/vars";
import { actionTypes } from "@/store/modules/products/productPage/commentsBlock";

import ComHeading from '@/components/partials/Heading';
import ComErrorMessage from "@/components/partials/ErrorMessage";

export default {
    name: "ComCommentsBlock",
    props: {
        slug: {
            type: String,
            required: true,
        },
        commentsLink: {
            type: String,
            required: true,
        }
    },
    components: {
        ComHeading,
        ComErrorMessage,
    },
    computed: {
        ...mapState({
            isLoading: state => state.commentsBlock.isLoading,
            commentsData: state => state.commentsBlock.data,
            error: state => state.commentsBlock.error,
        }),
        comments() {
            return this.commentsData ? {
                ...this.commentsData,
                results: this.commentsData.results.map(comment => ({
                    ...comment,
                    username: comment.username.replace(/^\/u\//, ''),
                })),
            } : null;
        },
        limit() {
            return limit;
        },
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            return `${day}-${month}-${year}`;
        },
    },
    mounted() {
        this.$store.dispatch(actionTypes.getComments, { slug: this.slug, pageSize: this.limit });
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.comments_block {
    .comments_box {
        padding: 20px 20px 40px;
        border-radius: 10px;
        background: $white-color;
    }
    .comments_list {
        display: flex;
        flex-direction: column;
        & > li {
            &:not(:last-child) {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid rgba(23, 23, 23, 0.25);
            }
        }
    }
    .comment_item {
        display: flex;
    }
    .img-container {
        width: 31px;
        height: 31px;
        margin-top: 5px;
        img {
            border-radius: 50%;
        }
    }
    .comment-info {
        width: calc(100% - 31px);
        padding-left: 10px;
    }
    .name {
        display: inline-block;
        margin: 0 0 2px;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: $main-color;
        &.link {
            &:hover,
            &:focus {
                color: $accent-color;
            }
        }
    }
    .date {
        margin: 0 0 15px;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: $text-color;
    }
    .title {
        display: inline-block;
        margin: 0;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: $main-color;
        &:hover,
        &:focus {
            color: $accent-color;
        }
    }
    .text {
        margin: 10px 0 0;
        font-size: 16px;
        line-height: 24px;
        color: $main-color;
    }
    .btn-container {
        margin-top: 40px;
    }
    @media(max-width: 767px) {
        .comments_box {
            padding: 20px 20px 35px;
        }
        .name {
            font-size: 16px;
        }
        .title,
        .text {
            width: calc(100% + 41px);
            margin-left: -41px;
        }
        .title {
            font-size: 16px;
            line-height: 24px;
        }
        .text {
            font-size: 14px;
            line-height: 20px;
            word-break: break-all;
        }
        .btn-container {
            margin-top: 35px;
        }
    }
}
</style>