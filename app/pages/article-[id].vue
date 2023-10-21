<script setup>
    import useIndex from '@/store/'
    import setMeta from '@/middleware/setMeta'

    const store = useIndex(),
        route = useRoute()  
    
    store.getData(route.path)

    const content = computed(() => {
            return store.getContent
        }),
        meta = computed(() => {
            return store.getMeta
        })
    
    watch(meta, (value) => {
        setMeta(value.title, value.description)
    })
</script>

<template lang="pug">
main.article-page
    article(v-if="content.length")
        template(v-for="(section, index) in content", :key="section.id")
            v-article-intro(
                v-if="section.type === 'article_intro_block'",
                :class="{ 'section': index !== 0 }",
                :title="section.data.title",
                :image="section.data.image",
                :readingTime="section.data.reading_time",
                :viewsCount="section.data.views_count",
                :description="section.data.short_description"
            )
            v-text-section(
                v-else-if="section.type === 'text_block'",
                :class="{ 'section': index !== 0 }",
                :text="section.data"
            )
            v-image-section(
                v-else-if="section.type === 'image_block'",
                :class="{ 'section': index !== 0 }",
                :image="section.data.src",
                :caption="section.data.caption"
            )
            v-slider(
                v-else-if="section.type === 'slider_block'",
                :class="{ 'section': index !== 0 }",
                :slides="section.data"
            )
            section(
                v-else-if="section.type === 'subscribe_form_block'",
                :class="{ 'section': index !== 0 }"
            )
                v-subscribe-form
            v-article-list-block(
                v-else-if="section.type === 'article_list_block'", 
                :class="{ 'section': index !== 0 }",
                :title="section.data.title", 
                :articles="section.data.articles",
            )
            v-form-section(
                v-else-if="section.type === 'cta_form_block'",
                :class="{ 'section': index !== 0 }"
            )
    .container(v-else)
        v-preloader
</template>

<style lang="scss"></style>