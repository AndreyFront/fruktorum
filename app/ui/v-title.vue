<script>
    import { defineComponent, h } from 'vue'
    
    export default defineComponent({
        name: 'v-title',
        props: {
            type: {
                type: String,
                required: true,
            },
            modifiers: {
                type: String
            }
        },
        render() {
            return h(this.type, { class: `title title--${this.type} ${this.modifiers}` }, this.$slots)
        }
    })
</script>

<style lang="scss">
    @import '/assets/styles/vars';

    .title {
        margin: 0;
        line-height: 1.35em;
        font-weight: 800;

        &--h2,
        &--h3 {
            line-height: 1.36em;
        }

        &--h1 {
            font-size: 56px;
            line-height: 1.17em;
        }

        &--h2 {
            font-size: 34px;
        }

        &--h3 {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 1200px) {
        .title {

            &--h1 {
                font-size: 48px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .title {

            &--h1 {
                font-size: 38px;
            }

            &--h2 {
                font-size: 28px;
            }

            &--h3 {
                font-size: 20px;
            }
        }
    }

    @media screen and (max-width: 576px) {
        .title {

            &--h1 {
                font-size: 32px;
            }
        }
    }
</style>