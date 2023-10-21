<script setup></script>

<template lang="pug">
button.btn-prev.btn-reset(type="button")
    i-btn-prev
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .btn-prev {
        width: 60px;
        height: 60px;
        cursor: pointer;
        transition: opacity $tr-time;

        &[disabled] {
            pointer-events: none;
            opacity: 0.5;
        }
    }
</style>