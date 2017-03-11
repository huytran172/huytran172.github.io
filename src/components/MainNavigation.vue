<template lang="pug">
    mixin nav-content()
        router-link(:to='page.url', tag='li', v-for='(page, index) in pages', :class='listItemClassObject(index)') 
            a {{ upperCase(page.name) }}

    .nav
        .nav__logo
            h1 {{ logoName }}

        ul.nav__list(v-if='width > 855')
            +nav-content
        
        ul.mobile-nav__list(v-if="isOpened && width <= 855")
            .button--close(@click="isOpened = false")
                icon(name="times", scale='3')
            +nav-content

        .mobile-nav-toggle(v-if="width <= 855", @click="isOpened = true")
            icon(name='bars', scale='2')
</template>

<script>
    import upperCase from '../filters/uppercase';
    export default {
        name: 'MainNavigation',
        data() {
            return {
                logoName: 'HT',
                width: document.documentElement.clientWidth,
                isOpened: false,
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
                    'nav__list__item': this.width > 855,
                    'mobile-nav__list__item': this.width <= 855,
                    'nav__list__item--last': this.isLastChild(index) && this.width > 855,
                    'mobile-nav__list__item--last': this.isLastChild(index) && this.width <= 855
                };
            },
            handleResize(e) {
                this.width = document.documentElement.clientWidth + 15 // workaround, just plus scrollbar width
                console.log(this.width)
            }
        },
        mounted() {
            window.onresize = this.handleResize
        },
    } 
</script>

<style lang="sass">
@import '../css/1-base/vars';

.nav 
    display: flex
    flex-direction: rows
    background-color: rgba(0, 0, 0, 0.5)
    
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

    .mobile-nav__list
        width: 0
    
@media only screen and (max-width: 855px)
    .nav
        display: flex
        &__logo
            margin: 25px auto

        .mobile-nav__list
            display: block
            height: 100%
            background-color: rgba(0, 0, 0, 0.9) 
            width: 250px 
            z-index: 1
            top: 0
            right: 0
            overflow-x: hidden
            padding-top: 60px
            position: fixed
            margin-top: 0

            .button--close
                color: white
                position: relative
                top: -30px

            &__item
                font-size: 1.3em
                list-style: none
                text-align: center
                margin: 0 30px 30px 0
                
                &:first-child
                    margin-top: 30px

                a
                    text-decoration: none
                    color: white

        .mobile-nav-toggle
            display: block
            position: absolute
            right: 50px
            top: 30px

            .fa-icon
                color: white
</style>