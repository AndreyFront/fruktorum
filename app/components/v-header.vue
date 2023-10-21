<script setup></script>

<template lang="pug">
header.header
    v-logo
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .header {
        flex: 0 0 auto;
        display: grid;
        align-items: center;
        justify-content: center;
        height: 85px;
    }
</style>