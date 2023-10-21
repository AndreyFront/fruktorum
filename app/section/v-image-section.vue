<script setup>
    const props = defineProps({
        image: {
            type: String,
        },
        caption: {
            type: String,
        }
    })
</script>

<template lang="pug">
section.image-section 
    figure.container
        .image-section__block-image 
            img.image-section__image(:src="image", alt="Картинка")
        figcaption.image-section__caption(v-if="caption") {{ caption }}
</template>

<style lang="scss">
    @import '/assets/styles/vars';

    .image-section {

        .container {
            margin-top: 0;
            margin-bottom: 0;
        }

        &__block-image {
            height: 550px;
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

        &__caption {
            margin-top: 15px;
            text-align: right;
            font-size: 14px;
            line-height: 1.42em;
            color: $color-gray; 
        }
    }

    @media screen and (max-width: 1024px) {
        .image-section {

            &__block-image {
                height: 400px;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .image-section {

            &__block-image {
                height: 350px;
            }
        }
    }
</style>