<script setup></script>

<template lang="pug">
.page
    v-header
    .page__content
        slot
    v-footer
</template>

<style lang="scss">
    @media screen and (max-width: 576px) {
        .page__content {
            padding: 30px 0 100px 0;
        }   
    }
</style>