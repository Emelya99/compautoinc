<template>
    <div class="breadcrumbs">
        <div class="container">
            <ul class="breadcrumbs-list">
                <li>
                    <router-link :to="{ name: 'home' }">Homepage</router-link>
                    <svg class="svg-icons">
                        <use xlink:href="@/assets/images/icons.svg#btn-arrow"></use>
                    </svg>
                </li>
                <li v-if="firstElement">
                    <router-link :to="{ name: firstElement }">{{firstElement}}</router-link>
                    <svg class="svg-icons">
                        <use xlink:href="@/assets/images/icons.svg#btn-arrow"></use>
                    </svg>
                </li>
                <li v-if="lastElement" class="active">
                    <span>{{ lastElement }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComBreadcrumbs',
    computed: {
        fullPathArr() {
            return this.$route.fullPath.split('/').slice(1);
        },
        firstElement() {
            return this.fullPathArr.slice(0,-1)[0];
        },
        lastElement() {
            return this.fullPathArr.pop();
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.breadcrumbs {
    @include margin-bottom(20px, null, 15px);

    .breadcrumbs-list {
        position: relative;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        width: 100%;
        padding: 20px 35px;
        border-radius: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: linear-gradient(113deg, #67AD5B 9.57%, #137217 92.2%);

        &::after {
            position: absolute;
            content: '';
            top: 50%;
            left: 25px;
            transform: translateY(-50%);
            width: 3px;
            height: 33px;
            background: $white-color;
        }

        &>li {
            display: flex;
            align-items: center;

            &:not(:last-child) {
                position: relative;
                padding-right: 44px;

                svg {
                    position: absolute;
                    top: calc(50% + 1px);
                    right: 10px;
                    transform: translateY(-50%);
                    font-size: 24px;
                    fill: $white-color;
                }
            }

            &.active {
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: $white-color;
            }

            a,
            span {
                font-size: 18px;
                line-height: 24px;
                text-transform: capitalize;   
            }

            span {
                font-weight: 500;
                color: $white-color;
            }

            a {
                color: rgba(255, 255, 255, 0.75);

                &:hover {
                    color: $white-color;
                }
            }

        }
    }
    @media(max-width: $tablet) {
        .breadcrumbs-list {
            padding: 15px 35px;
            &::after {
                height: 20px;
            }
            & > li {
                &:not(:last-child) {
                    padding-right: 30px;
                    svg {
                        right: 5px;
                    }
                }
                a,
                span {
                    font-size: 16px;
                    line-height: 20px;
                }
            }
        }
    }
    @media(max-width: $mobile) {
        .breadcrumbs-list {
            padding: 10px 18px;
            &::after {
                height: 16px;
                left: 10px;
            }
            & > li {
                &:not(:last-child) {
                    padding-right: 18px;
                    svg {
                        right: 2px;
                        font-size: 14px;
                    }
                }
                a,
                span {
                    font-size: 14px;
                    line-height: 18px;
                }
            }
        }
    }
}</style>