<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        readingTime: {
            type: Number,
            required: true
        },
        viewsCount: {
            type: Number,
            required: true
        },
        description: {
            type:  String
        }
    })
</script>

<template lang="pug">
section.article-intro
    .container 
        .article-intro__block-image 
            img.article-intro__image(:src="image", alt="Картинка")
        .article-intro__block-info 
            v-title(type="h1") {{ title }}
            ul.article-intro__list-info.list-reset
                li
                    i-clock.article-intro__icon-info
                    span.article-intro__info {{ readingTime }} мин время чтения
                li
                    i-eye.article-intro__icon-info
                    span.article-intro__info {{ viewsCount }} прочитали статью
            p.article-intro__desc(v-if="description") {{ description }}
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .article-intro {

        .container {
            display: grid;
            grid-template-columns: max-content auto;
            align-items: center;
            grid-column-gap: 30px;
        }
        
        &__block-image {
            width: 540px;
            height: 580px;
            overflow: hidden;
            border-radius: $rounding;
            background-color: $color-gray-s;
        }

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        &__block-info {}

        &__list-info {
            display: grid;
            grid-row-gap: 4px;
            align-items: start;
            margin-top: 30px;

            li {
                display: grid;
                grid-template-columns: max-content auto;
                align-items: center;
                grid-column-gap: 8px;
            }
        }

        &__icon-info {
            width: 16px;
            height: 16px;
        }

        &__info {
            color: $color-gray;
            font-size: 14px;
            line-height: 1.42em;
        }

        &__desc {
            margin: 50px 0 0 0;
        }
    }

    @media screen and (max-width: 1200px) {
        .article-intro {

            &__block-image {
                width: 480px;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .article-intro {

            .container {
                grid-template-columns: 1fr;
                grid-row-gap: 40px;
            }

            &__block-image {
                width: 100%;
                height: 400px;
            }

            &__block-info {
                grid-row: 1/2;
            }

            &__desc {
                margin: 30px 0 0 0;
            }
        }
    }
</style>