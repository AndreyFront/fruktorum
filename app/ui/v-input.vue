<script setup>
    import { Field, ErrorMessage } from 'vee-validate'

    const props = defineProps({
        placeholder: {
            type: String,
            required: true
        },
        rules: {
            type: Function
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        value: {
            type: String,
            default: ''
        }
    })

    const inputValue = ref(props.value)
</script>

<template lang="pug">
.input
    Field.input__field(
        :type="type", 
        :name="name", 
        :placeholder="placeholder", 
        :rules="rules",
        :value="inputValue",
        v-model="inputValue",
        @change="$emit('changeInput', inputValue)"
    )
    ErrorMessage.input__error-message(:name="name")
</template>
  
<style lang="scss">
    @import '@/assets/styles/vars';

    .input {
        display: grid;
        grid-row-gap: 4px;
        
        &__field {
            padding: 2px 8px;
            background-color: transparent;
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 1px solid $color-gray;
            outline: none;
            color: $color-white; 
            transition: border-bottom-color $tr-time;
        }

        &__error-message {
            font-size: 14px;
            color: $color-error;
        }
    }
</style>