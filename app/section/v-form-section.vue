<script setup>
    import { Form } from 'vee-validate'
    import { validateName, validateEmail } from '@/middleware/validationRule'

    const props = defineProps({
        image: {
            type: Object,
            default() {
                return {
                    src: '/images/image-1.jpg',
                    alt: 'Улыбающаяся девушка'
                }
            }
        },
        title: {
            type: String,
            default: 'Стань участником проекта'
        }
    })

    function onSubmit(values, actions) {
        console.log(values)
        console.log('Форма отправлена')
        let formValues = {}
        for (const [key, value] of Object.entries(values)) {
            formValues = { ...formValues, [key]: value.trim() }
        }
        actions.resetForm()
    }
</script>

<template lang="pug">
section.form-section
    .container 
        .form-section__content
            .form-section__block-image 
                img.form-section__image(:src="image.src" :alt="image.alt")
            Form.form-section__form-section(novalidate, @submit="onSubmit")
                v-title(type="h2") {{ title }}
                .form-section__block-inputs
                    v-input(
                        type="name", 
                        name="name", 
                        placeholder="Имя", 
                        :rules="validateName"
                    )
                    v-input(
                        type="phone", 
                        name="phone", 
                        placeholder="Телефон"
                    )
                    v-input(
                        type="email", 
                        name="email", 
                        placeholder="Email", 
                        :rules="validateEmail"
                    )
                v-btn.btn--theme--secondary(name="Присоединиться", type="submit")
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .form-section {

        .title {
            color: $color-white;
        }

        .input {
            width: 100%;
        }

        &__content {
            display: grid;
            grid-template-columns: max-content auto;
            grid-column-gap: 60px;
            background-color: $color-primary;
            padding: 60px;
        }

        &__block-image {
            width: 595px;
            height: 326px;
        }

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        &__form-section {
            display: grid;
            grid-row-gap: 50px;
            align-content: start;
        }

        &__block-inputs {
            display: grid;
            grid-row-gap: 25px;
            max-width: 353px;
        }
    }

    @media screen and (max-width: 1200px) {
        .form-section {
            &__block-image {
                width: 430px;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .form-section {

            &__form-section {
                grid-row: 1/2;
                grid-row-gap: 30px;
            }

            &__content {
                grid-template-columns: 1fr;
                grid-row-gap: 30px;
                padding: 40px;
                border-radius: 10px;
            }

            &__block-image {
                width: 100%;
                border-radius: 10px;
                overflow: hidden;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .form-section {

            .btn {
                width: 100%;
            }

            &__content {
                padding: 20px;
            }

            &__block-image {
                height: 230px;
            }
        }
    }
</style>