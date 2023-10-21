<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    })
</script>

<template lang="pug">
.article-card
    .article-card__block-info
        .article-card__block-image
            img.article-card__image(:src="image" :alt="`Картинка к статье ${title}`")
        v-title(type="h3") {{ title }}
    v-btn.btn--theme--primary(name="Читать" :link="link")
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .article-card {
        display: grid;
        align-content: space-between;
        grid-row-gap: 30px;

        &:hover &__image {
            transform: scale(1.05);
        }

        &__block-info {
            display: grid;
            grid-row-gap: 20px;
        }

        &__block-image {
            height: 320px;
            overflow: hidden;
        }

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform $tr-time;
        }
    }

    @media screen and (max-width: 1024px) {
        .article-card {

            .title {
                font-size: 18px;
            }
            
            &__block-image {
                height: 250px;
                border-radius: 10px;
            }
        }
    }

    @media screen and (max-width: 420px) {
        .article-card {

            .btn {
                width: 100%;
            }
        }
    }
</style>