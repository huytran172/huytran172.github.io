<template lang="pug">
.terminal
    .terminal__nav
        div.mock-button.mock-button--red.mock-button--first
        div.mock-button.mock-button--orange
        div.mock-button.mock-button--green
    
    .terminal__main
        intro-terminal-command(v-for='text in displayText', :command='text.command', :reply='text.reply')
    custom-button-continue

</template>

<script>
    import CustomButtonContinue from '../../components/CustomButtonContinue.vue';
    import IntroTerminalCommand from './IntroTerminalCommand.vue';

    export default {
        name: 'IntroTerminal',
        components: { CustomButtonContinue, IntroTerminalCommand },
        data() {
            return {
                displayText: [
                    { command: 'whoami', reply: 'Hello, my name is Huy Tran :D'},
                    { command: 'echo $occupation', reply: 'I am a junior majoring in Computer Science at Worcester Polytechnic Institute'},
                    { command: 'echo $location', reply: 'Worcester, MA 01602, USA'},
                    { command: 'cat more.info', reply: 'Press Enter to continue...'}
                ]
            }
        }
    }
</script>

<style lang="sass">
@import '../../css/0-tools/bourbon/bourbon';
@import '../../css/1-base/vars';

.terminal
    border-radius: 15px 15px 0 0

    &__nav
        height: 35px
        border-radius: inherit
        background: white
        display: flex

    &__main
        background: $black__opaque
        height: 100%     
        p
            padding: 10px 0 0 20px
            margin: 0
            font-size: 1.2em
            font-family: 'Operator Mono', 'Fira Code', 'Consolas'

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

</style>