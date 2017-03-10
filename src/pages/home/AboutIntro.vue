<template lang="pug">
.intro
    .intro__title
        h1 I AM AN ARTISTIC ENGINEER
    .intro__wrap
        .intro__wrap__avatar
            img(src="../../assets/Avatar.png")
        .intro__wrap__content
            p  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae mollitia facilis vel ea maiores animi perspiciatis provident dolor repudiandae corrupti reprehenderit, tempore libero sunt aperiam hic at iure asperiores magni.
            p  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur soluta eligendi, quos consequatur omnis tempora in. Provident accusantium repellendus iure, voluptate laboriosam laudantium distinctio corporis, ipsam hic quas iste itaque.
</template>

<script>
    export default {
        name: 'About',
        components: {  }
    }
</script>

<style lang="sass">
@import '../../css/0-tools/bourbon/bourbon';
@import '../../css/1-base/vars';

.intro
    display: flex
    flex-direction: column
    justify-content: center
    &__title
        text-align: center
        letter-spacing: 0.4em
    &__wrap
        display: flex
        justify-content: center
        align-items: center
        width: 70%
        margin: 0 auto

        &__avatar
            margin-right: 50px
            img
                width: 188px
                height: 188px

        &__content
            line-height: 1.5em
            font-size: 1.1em
</style>