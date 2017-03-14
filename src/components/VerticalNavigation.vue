<template lang="pug">
.vertical-nav
    .vertical-nav__item
    .vertical-nav__item.vertical-nav__item--active
    .vertical-nav__item        
    .vertical-nav__item
</template>

<script>
    export default {
        name: 'VerticalNavigation',
        data() {
            return {
            };
        }, 
        methods: {
        }
    } 
</script>

<style lang="sass">
@import '../css/1-base/vars';
.vertical-nav
    height: 100vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    &__item
        width: 20px
        height: 20px
        border-radius: 50%
        margin-left: 60px
        margin-bottom: 50px
        border: 1px solid black

        &--active
            background: $teal
            border: none
            width: 40px
            height: 40px

@media only screen and (max-width: 840px)
    .vertical-nav
        display: none

</style>