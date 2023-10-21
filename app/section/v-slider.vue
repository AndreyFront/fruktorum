<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Pagination, Navigation } from 'swiper/modules'

    import 'swiper/css'
    import 'swiper/css/pagination'
    import 'swiper/css/navigation'

    const props = defineProps({
        slides: {
            type: Array,
            required: true
        }
    })

    const modules = [Pagination, Navigation],
        btnPrev = ref(null),
        btnNext = ref(null)

    onMounted(() => {
        btnPrev.value = btnPrev.value.$el
        btnNext.value = btnNext.value.$el
    })
</script>

<template lang="pug">
section.slider
    .container
        .slider__content
            swiper.slider__slider(
                :pagination="{ type: 'fraction' }"
                :navigation="{ prevEl: btnPrev, nextEl: btnNext }"
                :modules="modules"
            )
                swiper-slide(v-for="(slide, index) in slides" :key="index")
                    img.slider__image(:src="slide", :alt="`Картинка слайда ${index + 1}`")
            v-btn-prev(ref="btnPrev")
            v-btn-next(ref="btnNext")
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .slider {

        .btn-prev,
        .btn-next {
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
        }

        .btn-prev {
            left: 0;
        }

        .btn-next {
            right: 0;
        }

        .swiper-pagination {
            top: auto;
            bottom: 0;
        }

        .swiper-slide {
            background-color: $color-gray-s;
        }

        &__content {
            position: relative;
        }

        &__slider {
            max-width: 1112px;
            height: 602px;
            padding-bottom: 52px;
        }

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    @media screen and (max-width: 1024px) {
        .slider {

            .swiper-slide {
                border-radius: 10px;
                overflow: hidden;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .slider {

            .btn-prev,
            .btn-next {
                display: none;
            }

            &__slider {
                height: 430px;
                padding-bottom: 30px;
            }
        }
    }
</style>