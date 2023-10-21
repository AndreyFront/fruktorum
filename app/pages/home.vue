<script setup>
    import useIndex from '@/store/'
    import setMeta from '@/middleware/setMeta'

    const store = useIndex(),
        route = useRoute() 

    store.getData('/')

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
main.main-page
    template(v-if="content.length")
        template(v-for="(section, index) in content", :key="section.id")
            v-article-list-block(
                v-if="section.type === 'article_list_block'", 
                :class="{ 'section': index !== 0 }",
                :articles="section.data.articles",
            )
    .container(v-else)
        v-preloader
</template>

<style lang="scss"></style>