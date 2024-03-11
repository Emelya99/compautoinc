<template>
    <div class="error-message">
        <p>{{ errorMessage }}</p>
    </div>
</template>

<script>

export default {
    name: "ComErrorMessage",
    props: {
        errorMessage: {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.error-message {
    padding: 16px;
    border-radius: 10px;
    background: rgba(255, 0, 0, 0.3);
    p {
        margin: 0;
        font-weight: 700;
        font-size: 20px;
        line-height: 1.5;
        color: red;
    }
    @media(max-width: 1024px) {
        padding: 10px;
        p {
            font-size: 16px;
        }
    }
}
</style>