<template lang="pug">
.preloader
    .container
        ul
            li(v-for="(li, index) in 25" :key="index")
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .preloader {
        padding-top: 125px;

        .container {
            display: grid;
            align-items: center;
            justify-content: center;
        }

        ul {
            padding: 0;
            margin: 0;
            list-style: none;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 2px;
            animation: preloader-rot 16s linear infinite;
        }

        li {
            width: 30px;
            height: 30px;
            background: $color-primary;
            border-radius: 4px;
            animation: preloader-scale 0.8s linear alternate infinite;

            &:nth-child(1) {
                z-index: 24;
            }
            &:nth-child(2) {
                z-index: 23;
            }
            &:nth-child(3) {
                z-index: 22;
            }
            &:nth-child(4) {
                z-index: 21;
            }
            &:nth-child(5) {
                z-index: 20;
            }
            &:nth-child(6) {
                z-index: 19;
            }
            &:nth-child(7) {
                z-index: 18;
            }
            &:nth-child(8) {
                z-index: 17;
            }
            &:nth-child(9) {
                z-index: 16;
            }
            &:nth-child(10) {
                z-index: 15;
            }
            &:nth-child(11) {
                z-index: 14;
            }
            &:nth-child(12) {
                z-index: 13;
            }
            &:nth-child(13) {
                z-index: 12;
            }
            &:nth-child(14) {
                z-index: 11;
            }
            &:nth-child(15) {
                z-index: 10;
            }
            &:nth-child(16) {
                z-index: 9;
            }
            &:nth-child(17) {
                z-index: 8;
            }
            &:nth-child(18) {
                z-index: 7;
            }
            &:nth-child(19) {
                z-index: 6;
            }
            &:nth-child(20) {
                z-index: 5;
            }
            &:nth-child(21) {
                z-index: 4;
            }
            &:nth-child(22) {
                z-index: 3;
            }
            &:nth-child(23) {
                z-index: 2;
            }
            &:nth-child(24) {
                z-index: 1;
            }
            &:nth-child(25) {
                z-index: 0;
            }
            &:nth-child(1) {
                animation-delay: 0.1s;
            }
            &:nth-child(7) {
                animation-delay: 0.3s;
            }
            &:nth-child(13) {
                animation-delay: 0.5s;
            }
            &:nth-child(19) {
                animation-delay: 0.7s;
            }
            &:nth-child(24) {
                animation-delay: 0.9s;
            }
            &:nth-child(2) {
                animation-delay: 0.2s;
            }
            &:nth-child(8) {
                animation-delay: 0.4s;
            }
            &:nth-child(14) {
                animation-delay: 0.6s;
            }
            &:nth-child(20) {
                animation-delay: 0.8s;
            }
            &:nth-child(3) {
                animation-delay: 0.3s;
            }
            &:nth-child(9) {
                animation-delay: 0.5s;
            }
            &:nth-child(15) {
                animation-delay: 0.7s;
            }
            &:nth-child(4) {
                animation-delay: 0.4s;
            }
            &:nth-child(10) {
                animation-delay: 0.6s;
            }
            &:nth-child(5) {
                animation-delay: 0.5s;
            }
            &:nth-child(1) {
                animation-delay: 0.1s;
            }
            &:nth-child(6) {
                animation-delay: 0.2s;
            }
            &:nth-child(11) {
                animation-delay: 0.3s;
            }
            &:nth-child(16) {
                animation-delay: 0.4s;
            }
            &:nth-child(21) {
                animation-delay: 0.5s;
            }
            &:nth-child(7) {
                animation-delay: 0.3s;
            }
            &:nth-child(12) {
                animation-delay: 0.4s;
            }
            &:nth-child(17) {
                animation-delay: 0.5s;
            }
            &:nth-child(22) {
                animation-delay: 0.6s;
            }
            &:nth-child(13) {
                animation-delay: 0.5s;
            }
            &:nth-child(18) {
                animation-delay: 0.6s;
            }
            &:nth-child(23) {
                animation-delay: 0.7s;
            }
            &:nth-child(19) {
                animation-delay: 0.7s;
            }
            &:nth-child(24) {
                animation-delay: 0.8s;
            }
            &:nth-child(25) {
                animation-delay: 0.9s;
            }
        }

        @keyframes preloader-rot {
            100% {
                transform: rotate(360deg);
            }
        }

        @keyframes preloader-scale {
            100% {
                transform: scale(0.1);
                opacity: 0;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .preloader {
            padding-top: 40px;

            li {
                width: 20px;
                height: 20px;
            }
        }
    }
</style>