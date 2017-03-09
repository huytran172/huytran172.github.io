<template lang="pug">
    .nav
        .nav__logo
            h1 {{ logoName }}
        ul.nav__list
            router-link(:to='page.url', tag='li', v-for='(page, index) in pages', :class='listItemClassObject(index)') 
                a {{ upperCase(page.name) }}
</template>

<script>
    import upperCase from '../filters/uppercase';
    export default {
        name: 'MainNavigation',
        data() {
            return {
                logoName: 'HT',
                pages: [
                    { name: 'home', url: '/'},
                    { name: 'resume', url: '/resume'},
                    { name: 'contact', url: '/contact'},
                    { name: 'my projects', url: '/project'}
                ]
            };
        }, 
        methods: {
            upperCase,
            isLastChild(index) { return index == this.pages.length - 1; }, 
            listItemClassObject(index) {
                return {
                    'nav__list__item': true,
                    'nav__list__item--last': this.isLastChild(index)
                };
            }
        }
    } 
</script>

<style lang="sass">
@import '../css/1-base/vars';

.nav 
    display: flex
    flex-direction: rows
    
    &__logo
        color: white
        font-family: $logo__font
        letter-spacing: .6em
        border: 5px solid white
        margin: 25px 60px
        padding: 2px 0 0 6px;
        
        h1 
            margin: 0
            padding: 0

    &__list
        list-style: none
        display: flex
        flex-direction: rows
        margin-left: auto

        &__item
            margin: auto 80px auto 0
            a 
                color: white
                text-decoration: none

            &--last
                margin-right: 60px
</style>