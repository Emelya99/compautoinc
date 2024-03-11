<template>
    <footer class="footer">
        <div class="container">
            <div class="top-part">
                <div class="info-part">
                    <router-link :to="{ name: 'home' }" class="site-logo">
                        <img src="@/assets/images/logo.svg" alt="Site logo">
                    </router-link>
                    <p class="text">
                        Explore the digital landscape with Compautoinc, your premier destination for comprehensive
                        game and app reviews, alongside the latest industry news. Our goal is to provide you with insightful
                        analyses and up-to-date information that will elevate your digital experiences.
                    </p>
                </div>
                <div class="right-part">
                    <div class="footer-item">
                        <h3 class="title small">Best apps</h3>
                        <ul class="footer-list">
                            <li>
                                <router-link :to="{ name: 'app', params: { slug: 'counter-strike-global-offensive' } }" class="ellipsis">
                                    Counter-Strike: Global Offensive
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'app', params: { slug: 'grand-theft-auto-v' } }" class="ellipsis">
                                    Grand Theft Auto V
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'app', params: { slug: 'portal-2' } }" class="ellipsis">
                                    Portal 2
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'app', params: { slug: 'the-witcher-3-wild-hunt' } }" class="ellipsis">
                                    The Witcher 3: Wild Hunt
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'app', params: { slug: 'tomb-raider' } }" class="ellipsis">
                                    Tomb Raider (2013)
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <h3 class="title small">Best platforms</h3>
                        <ul class="footer-list">
                            <li>
                                <router-link :to="{ name: 'platformItem', params: { slug: 'android' } }" class="ellipsis">
                                    Android
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'platformItem', params: { slug: 'ios' } }" class="ellipsis">
                                    iOS
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'platformItem', params: { slug: 'pc' } }" class="ellipsis">
                                    PC
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'platformItem', params: { slug: 'playstation5' } }" class="ellipsis">
                                    PlayStation
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'platformItem', params: { slug: 'xbox-series-x' } }" class="ellipsis">
                                    Xbox
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <h3 class="title small">Best genres</h3>
                        <ul class="footer-list">
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'adventure' } }" class="ellipsis">
                                    Adventure
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'arcade' } }" class="ellipsis">
                                    Arcade
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'card' } }" class="ellipsis">
                                    Card
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'platformer' } }" class="ellipsis">
                                    Platformer
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'racing' } }" class="ellipsis">
                                    Racing
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <h3 class="title small">Follow us</h3>
                        <com-social-list style-type="dark" />
                    </div>
                </div>
            </div>
            <div class="bottom-part">
                <p class="copyright">
                    © {{ currentYear }} Mountmorrisny.org - All Rights Reserved
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import ComSocialList from '@/components/socialLists/SocialList';

export default {
    name: 'ComFooter',
    components: {
        ComSocialList
    },
    computed: {
        currentYear() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.footer {
    padding: 70px 0;
    background: $white-color;

    .top-part {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        @include margin-bottom(70px, 30px, null);
        padding-bottom: 40px;

        &::after {
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(113deg, rgba(134, 116, 238, 0.35) 9.57%, rgba(61, 45, 150, 0.35) 92.2%);
        }
    }

    .info-part {
        width: 292px;
    }

    .site-logo {
        @include margin-bottom(24px, 15px, null);
    }

    .text {
        padding-left: 50px;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        color: $main-color;
    }

    .right-part {
        display: flex;
        justify-content: space-between;
        width: calc(100% - 292px);
        padding-left: 60px;
    }

    .footer-item {
        max-width: 180px;
    }

    .title.small {
        @include margin-bottom(20px, 15px, null);
    }

    .footer-list {
        li {
            &:not(:last-child) {
                @include margin-bottom(10px, 5px, null);
            }

            a {
                display: inline-block;
                max-width: 100%;
                font-size: 16px;
                line-height: 20px;
                color: $link-color;

                &:hover {
                    color: $accent-color;
                }
            }
        }
    }

    .copyright {
        margin: 0;
        font-size: 16px;
        line-height: 20px;
        color: $main-color;
    }

    @media(max-width: 1180px) {
        .info-part {
            width: 100%;
            margin-bottom: 30px;
        }

        .text {
            padding: 0;
        }

        .right-part {
            width: 100%;
            padding: 0;
        }

        .copyright {
            font-size: 14px;
            line-height: 18px;
        }
    }

    @media(max-width: $tablet) {
        padding: 45px 0;
        .top-part {
            padding-bottom: 30px;
        }

        .footer-item {
            max-width: 150px;
        }
    }

    @media(max-width: $mobile) {
        padding: 30px 0;

        .top-part {
            padding-bottom: 0;
        }
        .right-part {
            flex-wrap: wrap;
            width: calc(100% + 20px);
            margin: 0 -10px;
        }

        .footer-item {
            width: 50%;
            padding: 0 10px;
            margin-bottom: 30px;
            max-width: initial;
        }
    }
}</style>