<template>
    <ul class="social-list">
        <li>
            <a href="#" target="_blank">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#facebook"></use>
                </svg>
            </a>
        </li>
        <li>
            <a href="#" target="_blank">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#twitter"></use>
                </svg>
            </a>
        </li>
        <li>
            <a href="#" target="_blank">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#pinterest"></use>
                </svg>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ComSocialList'
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.social-list {
    display: flex;
    align-items: center;
    li {
        line-height: 1;
        font-size: 0;
        &:not(:last-child) {
            margin-right: 8px;
        }
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 5px;
            color: $white-color;
            background: $accent-color;
            &:hover {
                color: $accent-color;
                background: $white-color;
            }
            svg {
                font-size: 16px;
            }
        }
    }
}
</style>