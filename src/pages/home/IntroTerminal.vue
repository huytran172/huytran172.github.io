<template lang="pug">
transition(name='fade')
    .terminal(v-if='terminalShow')
        .terminal__nav
            div.mock-button.mock-button--red.mock-button--first
            div.mock-button.mock-button--orange
            div.mock-button.mock-button--green
        
        .terminal__main
            intro-terminal-command(
                v-for='(text, index) in listText', 
                :command='text.command', 
                :reply='text.reply',
                :delay='initialDelay + 2900 * index')

</template>

<script>
    import IntroTerminalCommand from './IntroTerminalCommand.vue';

    export default {
        name: 'IntroTerminal',
        components: { IntroTerminalCommand },
        data() {
            return {
                initialDelay: 1000,
                terminalShow: false,
                listText: [
                    { command: 'whoami', reply: 'Hello, my name is Huy Tran :D'},
                    { command: 'echo $occupation', reply: 'I am a junior majoring in Computer Science at Worcester Polytechnic Institute'},
                    { command: 'echo $location', reply: 'Worcester, MA 01602, USA'},
                    { command: 'cat more.info', reply: 'Press Enter to continue...'}
                ]
            }
        },
        mounted() {
            this.terminalShow = true
        },
        methods: {
            
        }
    }
</script>

<style lang="sass">
@import '../../css/0-tools/bourbon/bourbon';
@import '../../css/1-base/vars';

.terminal
    border-radius: 15px 15px 0 0
    width: 70%
    height: 66vh
    margin: 0 auto
    padding-top: 150px

    &__nav
        height: 35px
        border-radius: inherit
        background: white
        display: flex

    &__main
        background: $black__opaque
        height: 100%    
        padding-top: 30px        

.mock-button
    width: 17px
    height: 17px
    border-radius: 50%
    margin: auto 5px 

    &--first
        margin-left: 15px

    &--red
        background: $primary__color

    &--orange
        background: $light--orange

    &--green
        background: $light--green

.fade-enter-active, .fade-leave-active 
    transition: opacity 2s

.fade-enter, .fade-leave-to  
    opacity: 0

@media only screen and (max-width: 800px)
    .terminal
        width: 95%

@media only screen and (max-height: 450px) 
    .terminal
        height: 400px
</style>