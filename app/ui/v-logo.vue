<template lang="pug">
nuxt-link.logo(to="/home")
    i-logo.logo__icon
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .logo {
        display: grid;
        align-items: center;
        justify-content: start;
        width: 133px;
        height: 32px;
        transition: opacity $tr-time;

        &:hover {
            opacity: 0.6;
        }

        &__icon {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
</style>