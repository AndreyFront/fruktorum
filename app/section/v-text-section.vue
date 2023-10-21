<script setup>
    const props = defineProps({
        text: {
            type: String,
            required: true
        }
    })
</script>

<template lang="pug">
section.text-section
    .container
        .text-section__content(v-html="text")
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .text-section {

        .container {

        }

        &__content {
            width: 100%;
            max-width: 884px;
            margin: 0 auto;
        }

        h2 {
            margin: 0 0 50px 0;
            font-weight: 800;
            font-size: 34px;
            line-height: 1.35em;
        }

        p {
            &:not(:first-child) {
                margin: 20px 0 0 0;
            }
        }

        ul {
            display: grid;
            grid-row-gap: 5px;
            margin: 15px 0 0 0;
            padding: 0 0 0 115px;
            list-style-type: none;

            li {
                position: relative;
                padding-left: 18px;

                &::before {
                    content: '';
                    position: absolute;
                    top: 8px;
                    left: 0;
                    width: 8px;
                    height: 8px;
                    background-image: url('/icons/marker-list.svg');
                    background-position: left;
                    background-size: contain;
                    background-repeat: no-repeat;
                }
            }
        }

        blockquote {
            position: relative;
            margin: 40px 0 0 0;
            padding-left: 116px;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 80px;
                height: 64px;
                background-image: url('/icons/quotes-lef.svg');
                background-position: left;
                background-size: contain;
                background-repeat: no-repeat;
            }

            p {
                margin: 0;
                font-style: italic;
                font-weight: 300;
            }

            footer {
                margin-top: 15px;
                font-size: 14px;
                line-height: 1.42em;
                color: $color-gray;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .text-section {

            h2 {
                margin: 0 0 30px 0;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .text-section {

            h2 {
                font-size: 28px;
            }

            blockquote {
                padding-left: 90px;

                &::before {
                    width: 60px;
                    height: 60px;
                }
            }
        }
    }

    @media screen and (max-width: 576px) {
        .text-section {

            blockquote,
            ul {
                padding-left: 60px;
            }

            blockquote {
                &::before {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
</style>