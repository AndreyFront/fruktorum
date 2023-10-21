<template lang="pug">
button.btn-next.btn-reset(type="button")
    i-btn-next
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .btn-next {
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