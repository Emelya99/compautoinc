<template>
    <div class="loading-box">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
    </div>
</template>


<script>
export default {
    name: 'ComSmallLoader',
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.loading-box {

    .loading-dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        border-radius: 50%;
        background-color: $accent-color;
        animation: move 1.2s infinite linear alternate;

        &:nth-child(2) {
            animation-delay: 0.2s;
        }

        &:nth-child(3) {
            animation-delay: 0.4s;
        }
    }
}


@keyframes move {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}</style>