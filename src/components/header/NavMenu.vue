<template>
    <div class="nav-container">
        <nav class="nav-menu" :class="{ active: isMenuOpened }" ref="navMenuBox">
            <button class="close-btn" ref="navMenuClose">
                <svg class="svg-icons">
                    <use xlink:href="@/assets/images/icons.svg#close-btn"></use>
                </svg>
            </button>
            <h3 class="title medium">Menu</h3>
            <ul class="nav-list">
                <li>
                    <router-link class="nav-link" :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link" :to="{ name: 'reviews' }">
                        Reviews
                    </router-link>
                </li>
                <li class="dropdown" ref="dropdownBox">
                    <button class="nav-link dropdown-link" :class="{ active: isDropdownOpened }" ref="dropdownBtn">
                        Categories
                        <svg class="svg-icons">
                            <use xlink:href="@/assets/images/icons.svg#arrow-bottom"></use>
                        </svg>
                    </button>
                    <div v-if="isDropdownOpened" class="dropdown-box">
                        <ul class="dropdown-list">
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'action' } }" class="ellipsis">
                                    Action
                                </router-link>
                            </li>
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
                                <router-link :to="{ name: 'genreItem', params: { slug: 'board-games' } }" class="ellipsis">
                                    Board Games
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'card' } }" class="ellipsis">
                                    Card
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'casual' } }" class="ellipsis">
                                    Casual
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'educational' } }" class="ellipsis">
                                    Educational
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'family' } }" class="ellipsis">
                                    Family
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'fighting' } }" class="ellipsis">
                                    Fighting
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'indie' } }" class="ellipsis">
                                    Indie
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'massively-multiplayer' } }"
                                    class="ellipsis">
                                    Massively Multiplayer
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'platformer' } }" class="ellipsis">
                                    Platformer
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'puzzle' } }" class="ellipsis">
                                    Puzzle
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'racing' } }" class="ellipsis">
                                    Racing
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'role-playing-games-rpg' } }"
                                    class="ellipsis">
                                    RPG
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'shooter' } }" class="ellipsis">
                                    Shooter
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'simulation' } }" class="ellipsis">
                                    Simulation
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'sports' } }" class="ellipsis">
                                    Sports
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'genreItem', params: { slug: 'strategy' } }" class="ellipsis">
                                    Strategy
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <router-link class="nav-link" :to="{ name: 'platforms' }">
                        Platforms
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link" :to="{ name: 'genres' }">
                        Genres
                    </router-link>
                </li>
            </ul>
            <div class="social-box">
                <com-social-list style-type="light" />
            </div>
        </nav>
        <button class="burger-btn" ref="navMenuBtn">
            <svg class="svg-icons">
                <use xlink:href="@/assets/images/icons.svg#burger-btn"></use>
            </svg>
        </button>
    </div>
</template>

<script>
import ComSocialList from '@/components/socialLists/SocialList';

export default {
    name: 'ComNavMenu',
    components: {
        ComSocialList
    },
    computed: {
        pageParent() {
            return this.$parent.$parent.$el;
        },
        navParent() {
            return this.$el;
        },
        slug() {
            return this.$route.path;
        }
    },
    data() {
        return {
            isDropdownOpened: false,
            isMenuOpened: false,
        }
    },
    watch: {
        slug() {
            this.removeDisabledMethods();
            if (this.isDropdownOpened) {
                this.isDropdownOpened = false;
            }
            if (this.isMenuOpened) {
                this.isMenuOpened = false;
            }
        },
    },
    methods: {
        toggleDropdown(e) {
            const dropdownBtn = this.$refs.dropdownBtn;
            const dropdownBox = this.$refs.dropdownBox;
            if (dropdownBtn === e.target) {
                this.isDropdownOpened = !this.isDropdownOpened;
                return;
            }
            if (this.isDropdownOpened && !dropdownBox.contains(e.target)) {
                this.isDropdownOpened = false;
                return;
            }
        },
        toggleMenu(e) {
            const navMenuBtn = this.$refs.navMenuBtn;
            const navMenuClose = this.$refs.navMenuClose;
            const navMenuBox = this.$refs.navMenuBox;
            if (navMenuBtn.contains(e.target)) {
                this.isMenuOpened = true;
                this.addDisabledSettings();
                return;
            }
            if (this.isMenuOpened && (navMenuClose.contains(e.target) || !navMenuBox.contains(e.target))) {
                this.isMenuOpened = false;
                this.removeDisabledMethods();
                return;
            }
        },
        addDisabledSettings() {
            this.pageParent.classList.add('disabled');
            this.navParent.classList.add('menu-open');
        },
        removeDisabledMethods() {
            this.pageParent.classList.remove('disabled');
            this.navParent.classList.remove('menu-open');
        }
    },
    mounted() {
        document.addEventListener('click', this.toggleDropdown);
        document.addEventListener('click', this.toggleMenu);
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

.nav-container {

    .nav-list {
        display: flex;
        align-items: center;

        &>li {
            &:not(:last-child) {
                margin-right: 50px;
            }

            &>.nav-link {
                font-size: 18px;
                line-height: 24px;
                color: $secondary-color;

                &.router-link-exact-active,
                &:hover {
                    color: $accent-color;
                }
            }

            &>.dropdown-link {
                display: flex;
                align-items: center;

                &.active {
                    color: $accent-color;

                    svg {
                        top: -3px;
                        left: -3px;
                        transform: rotate(-180deg);
                    }
                }

                svg {
                    position: relative;
                    top: 4px;
                    font-size: 14px;
                    margin-left: 10px;
                    transition: $base-transition;
                }
            }
        }
    }

    .dropdown {
        position: relative;
    }

    .dropdown-box {
        position: absolute;
        top: calc(100% + 10px);
        left: 0;
        width: 170px;
        padding: 12px 12px 12px 0;
        border-radius: 5px;
        box-shadow: 6px 6px 50px 0px rgba(0, 0, 0, 0.10);
        background: $white-color;
    }

    .dropdown-list {
        max-height: 179px;
        padding-left: 12px;
        overflow-y: auto;

        &>li {
            margin-right: 10px;

            &:not(:last-child) {
                @include margin-bottom(7px, 10px, null);
            }

            &>a {
                display: block;
                font-size: 16px;
                line-height: 24px;
                color: $secondary-color;

                &:hover {
                    color: $accent-color;
                }
            }
        }
    }

    .burger-btn,
    .social-box,
    .title.medium,
    .close-btn {
        display: none;
    }

    @media(max-width: 1300px) {
        .nav-list {
            & > li {
                &:not(:last-child) {
                    margin-right: 30px;
                }
            }
        }
    }

    @media(max-width: 1180px) {
        position: relative;
        z-index: 2;

        &.menu-open {
            &::after {
                position: fixed;
                content: '';
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                background: rgba(103, 173, 91, 0.80);
            }
        }

        .nav-menu {
            display: none;
            position: fixed;
            top: 0;
            right: 0;
            width: 444px;
            height: 100%;
            background: linear-gradient(113deg, #67AD5B 9.57%, #137217 92.2%);

            &.active {
                display: block;
            }
        }

        .nav-list {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            height: calc(100% - 195px);
            overflow-y: auto;
            padding-top: 15px;

            &>li {
                width: 100%;

                &:not(:last-child) {
                    margin: 0;
                }

                &>.nav-link {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    width: 100%;
                    padding: 15px 30px;
                    font-weight: 700;
                    line-height: 26px;
                    color: $white-color;

                    &::after {
                        position: absolute;
                        content: '';
                        top: 50%;
                        left: 30px;
                        transform: translateY(-50%);
                        width: 4px;
                        height: 22px;
                        opacity: 0;
                        background: $accent-color;
                    }

                    &.active,
                    &.router-link-exact-active,
                    &:hover {
                        padding-left: 44px;
                        color: $accent-color;
                        background: $white-color;

                        &::after {
                            opacity: 1;
                        }
                    }
                }
            }
        }

        .dropdown-box {
            position: relative;
            top: 0;
            width: 100%;
            padding: 0 15px 30px 0;
            border-radius: initial;
            box-shadow: initial;
        }

        .dropdown-list {
            max-height: 160px;
            padding: 0 0 0 44px;
        }

        .title.medium {
            display: block;
            padding: 25px 30px;
            margin: 0;
            color: $white-color;
        }

        .social-box {
            display: block;
            position: absolute;
            bottom: 35px;
            left: 30px;
        }

        .close-btn {
            position: absolute;
            top: 32px;
            right: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            z-index: 1;
            border-radius: 6px;
            color: $accent-color;
            background: $white-color;

            &:hover {
                color: $white-color;
                background: $accent-color;
            }

            svg {
                font-size: 10px;
            }
        }

        .burger-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 6px;
            color: $white-color;
            background: $accent-color;

            &:hover {
                color: $accent-color;
                background: $white-color;
            }

            svg {
                font-size: 24px;
            }
        }
    }

    @media(max-width: $mobile) {
        .close-btn {
            top: 28px;
            right: 30px;
        }

        .burger-btn {
            width: 28px;
            height: 28px;

            svg {
                font-size: 16px;
            }
        }
    }

    @media(max-width: 500px) {
        .nav-menu {
            width: calc(100% - 66px);
        }

        .nav-list {
            height: calc(100% - 159px);
            padding-top: 35px;

            &>li {
                &>.nav-link {
                    padding: 15px 20px;

                    &:after {
                        left: 20px;
                    }

                    &.active,
                    &.router-link-exact-active,
                    &:hover {
                        padding-left: 36px;
                    }
                }
            }
        }

        .dropdown-list {
            padding-left: 36px;
        }

        .title.medium {
            padding: 16px 20px;
        }

        .close-btn {
            top: 21px;
            right: 20px;
        }

        .social-box {
            bottom: 32px;
            left: 20px;
        }
    }
}
</style>