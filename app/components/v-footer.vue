<script setup></script>

<template lang="pug">
footer.footer
    .container.footer__wrap-info
        .footer__inner-info
            v-logo
            span.footer__desc Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
        .footer__contacts
            .footer__contact
                span.footer__title-contact email
                a.footer__link-contact(href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
            ul.footer__social-network.list-reset
                li
                    a.footer__link-sn(href="#", target="_blank")
                        i-facebook
                li
                    a.footer__link-sn(href="#", target="_blank")
                        i-vk
                li
                    a.footer__link-sn(href="#", target="_blank")
                        i-instagram
                li
                    a.footer__link-sn(href="#", target="_blank")
                        i-telegram
    v-subscribe-form
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .footer {
        flex: 0 0 auto;
        border-top: 1px solid $color-gray;

        &__wrap-info {
            display: grid;
            grid-auto-flow: column;
            justify-content: space-between;
            align-items: start;
            grid-column-gap: 40px;
            padding-top: 50px;
            padding-bottom: 70px;
        }

        &__inner-info {
            display: grid;
            grid-row-gap: 20px;
        }

        &__desc {
            max-width: 400px;
            font-size: 14px;
            line-height: 1.42em;
            color: $color-gray;
        }

        &__contacts {
            display: grid;
            grid-row-gap: 24px;
        }

        &__contact {
            display: grid;
            grid-row-gap: 2px;
        }

        &__title-contact {
            font-size: 14px;
            line-height: 1.42em;
            color: $color-gray;
        }

        &__link-contact {
            line-height: 1.22em;
        }

        &__social-network {
            display: grid;
            grid-auto-flow: column;
            justify-content: start;
            grid-column-gap: 20px;
        }

        &__link-sn {
            widows: 30px;
            height: 30px;
            transition: opacity $tr-time;

            &:hover {
                opacity: 0.6;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .footer {

            .subscribe-form {

                &__content {
                    border-radius: 0;
                }
            }
        }
    }
    
    @media screen and (max-width: 576px) {
        .footer {

            .subscribe-form {

                .container {
                    padding: 0;
                }
            }

            &__wrap-info {
                grid-auto-flow: row;
                grid-row-gap: 40px;
                padding-bottom: 50px;
            }
        }
    }
</style>