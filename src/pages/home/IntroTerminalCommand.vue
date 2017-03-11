<template lang="pug">
div(v-if='commandShow')
    vue-typer(
        :text='"> " + command',
        :repeat='0',
        initial-action='typing',
        :pre-type-delay='500',
        :type-delay='70',
        caret-animation='solid')

    transition(name='fade')
        div(v-if='replyShow')
            p.terminal__main__response {{ reply }}
</template>

<script>
    import { VueTyper } from 'vue-typer';

    export default {
        name: 'IntroTerminalCommand',
        components: { VueTyper },
        props: ['command', 'reply', 'delay'],
        data() {
            return {
                commandShow: false,
                replyShow: false
            }
        },
        mounted() {
            setTimeout(() => this.commandShow = true, this.delay + 1000);
            setTimeout(() => this.replyShow = true, this.delay + this.command.length * 70 + 2000);
        }
    }
</script>

<style lang="sass" scoped>
p
    padding: 20px 0 20px 20px
    margin: 0
    font-size: 1.2em
    font-family: 'Operator Mono', 'Fira Code', 'Consolas'

@media only screen and (max-width: 450px)
    p
        font-size: 1em

    .vue-typer
        font-size: 1em
</style>

<style lang="sass">
@import '../../css/0-tools/bourbon/bourbon';
@import '../../css/1-base/vars';
.terminal__main__response
    color: white

.vue-typer 
    font-family: 'Operator Mono', 'Fira Code', 'Consolas'
    font-size: 1.3em
    margin-left: 18px
    .custom.char 
        color: $light--green;
    .custom.char.selected 
        background-color: #264F78;
    .custom.caret 
        width: 10px;
        background-color: #3F51B5;

</style>