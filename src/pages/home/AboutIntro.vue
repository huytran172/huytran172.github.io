<template lang="pug">
    .intro
        .intro__wrap
            .intro__wrap__avatar
                img(src="../../assets/Avatar2.jpg")
            .intro__wrap__content
                h1 Hey, I'm Huy
                hr
                p.short-intro  I am a detail oriented software engineer who loves to write beautiful code with testing in mind, whip "monstrous code" into shape.
                p.long-intro  As a senior undergraduate student majoring in
                    span.bold  Computer Science at Worcester Polytechnic Institute,
                    span  I have experience developing and working with multiple web applications in different technology stacks, from small NodeJS app for term project to a big Java web app having been developed for years. For my side projects, I love designing and architecting real-world web and database systems by learning and using different libraries and frameworks in Javascript and PHP. And yes, I am not shy to say I really love PHP and its community!
                p.long-intro Not only do I develope functional, scalable, maintainable applications, I am also often the designer in the team. I am not that top 1% designer but my designs still provide good, intuitive user experiences.
</template>

<script>
    export default {
        name: 'About',
        components: {}
    }
</script>

<style lang="sass">
    @import '../../css/0-tools/bourbon/bourbon'
    @import '../../css/1-base/vars'

    .intro
        width: 100%
        background: #111111
        color: white
        display: flex
        padding: 150px 0 150px 0
        flex-direction: column
        justify-content: center
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif

        hr
            display: block
            height: 1px
            border: 0
            border-top: 1px solid $light--orange
            margin: 1em 0
            padding: 0

        &__title
            text-align: center
            letter-spacing: 0.1em

        &__wrap
            display: flex
            justify-content: center
            align-items: center
            width: 70%
            margin: 0 auto

            &__avatar
                margin-right: 50px
                img
                    width: 250px
                    height: 250px

            &__content
                line-height: 1.6em
                font-size: 1.1em

                h1
                    margin-bottom: 30px

                p.short-intro
                    margin-top: 20px
                    letter-spacing: 0.02em

                p.long-intro
                    font-weight: 300
                    letter-spacing: 0.02em

                .bold
                    font-weight: 400


    @media only screen and (max-width: 900px)
        .intro
            display: flex
            padding-top: 10px

            &__wrap
                flex-direction: column

                &__avatar
                    margin: 10px 0 10px 0

    @media only screen and (max-width: 650px)
        .intro__title
            display: none

        .intro__wrap__content
            font-size: 1em

    @media only screen and (max-width: 450px)
        .intro__wrap
            &__avatar
                margin-top: 50px
                img
                    width: 150px
                    height: 150px
            &__content
                line-height: 1.3em
</style>