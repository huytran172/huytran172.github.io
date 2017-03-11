<template lang="pug">
div
    .main-header
        main-navigation
        intro-terminal
        custom-button-continue
    .about
        vertical-navigation
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
        components: { MainNavigation, VerticalNavigation, IntroTerminal, AboutIntro, CustomButtonContinue },
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

.about
    display: flex

@media only screen and (max-height: 450px)
    .main-header
        height: 600px


</style>