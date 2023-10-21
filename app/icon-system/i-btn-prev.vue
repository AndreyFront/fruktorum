<template>
    <svg class="i-btn-prev" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path class="i-btn-prev__bg" d="M0 0.999999C0 0.447714 0.447715 0 1 0H59C59.5523 0 60 0.447715 60 1V59C60 59.5523 59.5523 60 59 60H0.999999C0.447714 60 0 59.5523 0 59V0.999999Z" fill="#1B1B1B"/>
        <path class="i-btn-prev__arrow" d="M33.4351 39L25.6569 31.2218C25.2664 30.8313 25.2664 30.1981 25.6569 29.8076L33.4351 22.0294" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round"/>
    </svg>
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .i-btn-prev {

        &:hover {
            .i-btn-prev {

                &__bg {
                    fill: $color-white;
                }

                &__arrow {
                    stroke: $color-primary;
                }
            }
        }

        &__bg {
            transition: fill $tr-time;
        }

        &__arrow {

            transition: stroke $tr-time;
        }
    }
</style>