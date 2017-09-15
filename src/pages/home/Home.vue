<template lang="pug">
div
    .main-header
        intro-terminal
        custom-button-continue
    .about
        about-intro
</template>

<script>
    import MainNavigation from '../../components/MainNavigation.vue'
    import VerticalNavigation from '../../components/VerticalNavigation.vue'
    import IntroTerminal from './IntroTerminal.vue'
    import AboutIntro from './AboutIntro.vue'
    import CustomButtonContinue from '../../components/CustomButtonContinue.vue'

    export default {
        name: 'Home',
        components: { MainNavigation, IntroTerminal, AboutIntro, CustomButtonContinue },
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
                    let height = this.$children[2].$el.clientHeight;
                    window.scrollTo(height, 0);
                    this.enterPressed = true;
                }
            }
        }
    }
</script>

<style lang="sass">
@import '../../css/0-tools/bourbon/bourbon'
@import '../../css/1-base/vars'
.main-header
    background: url(../../assets/wallpaper.jpg)
    -webkit-background-size: cover
    background-size: cover
    height: 100vh

.about
    display: flex

@media only screen and (max-width: 840px)
    .about
        min-height: 100vh


@media only screen and (max-height: 450px)
    .main-header
        height: 600px

</style>