<template lang="pug">
    .custom-button__continue
        i
            icon(name='angle-down', scale='3')
</template>

<script>
    export default {
        name: 'CustomButtonContinue'
    }
</script>

<style lang="sass">
@import '../css/1-base/vars';

.custom-button__continue
    background: $white__opaque
    width: 50px
    height: 50px
    display: inline
    position: absolute
    left: 60px
    bottom: 40px
    border-radius: 50%
    i
        position: relative
        left: 9px
    &:hover
        background: white

@media only screen and (max-width: 800px)
    .custom-button__continue
        display: none
</style>