<script setup>
    import { Form } from 'vee-validate'
    import { validateEmail } from '@/middleware/validationRule'

    const props = defineProps({
        title: {
            type: String,
            default: 'Подпишись на рассылку'
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
.subscribe-form
    .container 
        .subscribe-form__content
            v-title(type="h3") {{ title }}
            Form.subscribe-form__form(novalidate, @submit="onSubmit")
                v-input(
                    type="email", 
                    name="email", 
                    placeholder="Email", 
                    :rules="validateEmail"
                )
                v-btn.btn--theme--secondary(type="submit" name="Подписаться")
</template>

<style lang="scss">
    @import '@/assets/styles/vars';

    .subscribe-form {
        color: $color-white;

        &__content {
            display: grid;
            grid-auto-flow: column;
            justify-content: space-between;
            align-items: center;
            grid-column-gap: 20px;
            padding: 27px 30px;
            background-color: $color-primary;
        }

        &__form {
            display: grid;
            grid-template-columns: minmax(200px, 353px) max-content;
            grid-column-gap: 37px;
            align-items: end;
        }
    }

    @media screen and (max-width: 1024px) {
        .subscribe-form {

            &__content {
                grid-auto-flow: row;
                grid-row-gap: 20px;
                border-radius: 10px;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .subscribe-form {

            &__content {
                justify-content: inherit;
                text-align: left;
            }

            .btn {
                width: 100%;
            }

            &__form {
                grid-template-columns: 1fr;
                grid-row-gap: 20px;
            }
        }
    }
</style>