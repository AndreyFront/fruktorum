<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        link: {
            type: String
        }
    })
</script>

<template lang="pug">
nuxt-link.btn(v-if="link", :to="link")
    span.btn__name {{ name }}
button.btn(v-else)
    span.btn__name {{ name }}
</template>
  
<style lang="scss">
    @import '@/assets/styles/vars';

    .btn {
        position: relative;
        display: grid;
        justify-content: center;
        align-items: center;
        width: max-content;
        height: 46px;
        padding: 10px 50px;
        text-decoration: none;
        cursor: pointer;
        border: 2px solid;
        border-color: transparent;
        border-radius: 2px;
        transition: background-color $tr-time, border-color $tr-time;

        &[disabled] {
            opacity: 0.5;
            pointer-events: none;
        }

        &__name {
            color: $color-white;
            line-height: 1em;
            transition: color $tr-time;
        }

        &--theme--primary {
            background-color: $color-primary;

            &:hover {
                background-color: $color-blue;
            }
        }

        &--theme--secondary {
            background-color: $color-blue;

            &:hover {
                background-color: transparent;
                border-color: $color-blue;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .btn {
            &--theme--primary {

                &:hover {
                    background-color: $color-primary;
                }

                &:active {
                    background-color: $color-blue;
                }
            }

            &--theme--secondary {

                &:hover {
                    background-color: $color-blue;
                    border-color: transparent;
                }

                &:active {
                    background-color: transparent;
                    border-color: $color-blue;
                }
            }
        }
    }
</style>