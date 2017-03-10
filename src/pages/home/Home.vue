<template lang="pug">
    .main-header
        main-navigation
        intro-terminal
</template>

<script>
    import MainNavigation from '../../components/MainNavigation.vue';
    import IntroTerminal from './IntroTerminal.vue';

    export default {
        name: 'Home',
        components: { MainNavigation, IntroTerminal }
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
</style>