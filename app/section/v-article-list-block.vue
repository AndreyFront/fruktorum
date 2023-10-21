<script setup>
    const props = defineProps({
        title: {
            type: String,
        },
        articles: {
            type: Array,
            required: true
        }
    })
</script>

<template lang="pug">
section.article-list-block
    .container 
        v-title(v-if="title" type="h2") {{ title }}
        .article-list-block__wrpa-cards(v-if="articles")
            v-article-card(
                v-for="article in articles" 
                :key="Date.now()"
                :title="article.title"
                :link="article.link"
                :image="article.image"
            )
        v-title(type="h2" v-else) Статей пока нет
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .article-list-block {

        .container {
            display: grid;
            grid-row-gap: 50px;
        }

        &__wrpa-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 30px;
            grid-row-gap: 60px;
        }
    }

    @media screen and (max-width: 768px) {
        .article-list-block {

            &__wrpa-cards {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }

    @media screen and (max-width: 575px) {
        .article-list-block {

            .container {
                grid-row-gap: 30px;
            }

            &__wrpa-cards {
                grid-template-columns: 1fr;
                grid-row-gap: 40px;
            }
        }
    }
</style>