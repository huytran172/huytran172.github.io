<template lang="pug">
div
    p.terminal__main__command #[icon(name='angle-right')] {{ command }}
    p.terminal__main__response {{ reply }}
</template>

<script>
    export default {
        name: 'IntroTerminalCommand',
        props: ['command', 'reply']
    }
</script>

<style lang="sass">
@import '../../css/0-tools/bourbon/bourbon';
@import '../../css/1-base/vars';

.terminal__main__command
    color: $light--green
    margin: 0 auto
    i
        color: white

.terminal__main__response
    color: white
    
</style>