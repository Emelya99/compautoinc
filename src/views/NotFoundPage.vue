<template>
    <section class="error_page">
        <div class="container">
            <div class="error_content">
                <h1 class="title">404</h1>
                <p class="text">Oops! Page not found.</p>
                <router-link class="default-btn auto-size background" :to="{ name: 'home' }">
                    Go to the main page
                    <svg class="svg-icons">
                        <use xlink:href="@/assets/images/icons.svg#btn-arrow"></use>
                    </svg>
                </router-link>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'ComNotFoundPage',
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.error_page {
    padding: 100px 0;
    .error_content {
        text-align: center;
    }
    .title {
        margin-bottom: 20px;
        font-size: 72px;
        line-height: 1.3em;
    }
    .text {
        margin-bottom: 40px;
        font-size: 24px;
        line-height: 32px;
    }
    @media(max-width: 1024px) {
        padding: 60px 0;
    }
    @media(max-width: 767px) {
        .title {
            margin-bottom: 10px;
        }
        .text {
            margin-bottom: 20px;
        }
    }
}
</style>
