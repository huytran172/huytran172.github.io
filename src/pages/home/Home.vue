<template lang="pug">
div
    .main-header
        main-navigation
        intro-terminal
    .about
        vertical-navigation
        about-intro
</template>

<script>
    import MainNavigation from '../../components/MainNavigation.vue'
    import VerticalNavigation from '../../components/VerticalNavigation.vue'
    import IntroTerminal from './IntroTerminal.vue'
    import AboutIntro from './AboutIntro.vue'

    export default {
        name: 'Home',
        components: { MainNavigation, VerticalNavigation, IntroTerminal, AboutIntro },
        created() {
            window.addEventListener('keyup', this.scrollToAbout)
        },
        data() {
            return {
                enterPressed: false,
            }
        },
        methods: {
            /**
             * Scroll to about div
             */
            scrollToAbout(e) {
                if (e.keyCode == 13 && ! this.enterPressed) {
                    var height = this.$children[2].$el.clientHeight
                    window.scrollTo(height, 0);
                    this.enterPressed = true
                }
            }
        }
    }
</script>

<style lang="sass">
@import '../../css/0-tools/bourbon/bourbon';
@import '../../css/1-base/vars';
.main-header
    @include linear-gradient(to bottom right, $primary__color--light, $primary__color)
    height: 100vh

    .terminal
        width: 70%
        height: 66vh
        margin: 3% auto

.about
    display: flex
</style>