<template>
    <section class="genres_page">
        <div class="container">

            <com-heading
                title-content="All Genres"
                text-content="Explore a myriad of genres on our site, catering to every taste and preference." 
            />

        </div>
    </section>
</template>
  
<script>
import ComHeading from "@/components/partials/Heading";

export default {
    name: 'ComGenresPage',
    components: {
        ComHeading,
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.genres_page {
    padding-top: 30px;
    .title.small {
        @include margin-bottom(20px,null,15px);
    }
    .heading-container {
        margin-bottom: 40px;
    }
    @media(max-width: $tablet) {
        padding-top: 10px;
    }
    @media(max-width: $mobile) {
        padding-top: 5px;
    }
}
</style>