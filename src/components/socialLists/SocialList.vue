<template>
    <ul class="social-list" :class="styleType">
        <li>
            <a href="https://github.com/Emelya99" aria-label="GitHub profile" target="_blank">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#github"></use>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/artur-yemelianov-59766b28b/" aria-label="LinkedIn profile" target="_blank">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#linkedin"></use>
                </svg>
            </a>
        </li>
        <li>
            <a href="https://t.me/yemelianov99" aria-label="Telegram profile" target="_blank">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#telegram"></use>
                </svg>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ComSocialList',
    props: {
        styleType: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.social-list {
    display: flex;
    align-items: center;

    &.dark {
        li {
            a {
                color: $white-color;
                background: $accent-color;

                &:hover {
                    color: $accent-color;
                    background: $white-color;
                }
            }
        }
    }

    &.light {
        li {
            a {
                color: $accent-color;
                background: $white-color;

                &:hover {
                    color: $white-color;
                    background: $accent-color;
                }
            }
        }
    }

    li {
        line-height: 1;
        font-size: 0;

        &:not(:last-child) {
            margin-right: 10px;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 5px;

            svg {
                font-size: 24px;
            }
        }
    }

    @media(max-width: 640px) {
        li {
            a {
                width: 28px;
                height: 28px;
            }
        }
    }
}</style>