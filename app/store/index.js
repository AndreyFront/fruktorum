import { defineStore } from 'pinia'
import useFetchApi from '@/middleware/useFetchApi'

export default defineStore('index', {
    state: () => {
        return {
            meta: ref({}),
            content: ref([])
        }
    },
    actions: {
        getData(payload) {
            this.meta.value = {}
            this.content.value = []
            
            try {
                setTimeout(() => {
                    useFetchApi(`${payload}`)
                        .then((responce) => {
                            const data = responce.data.value
                            this.meta.value = data.meta
                            this.content.value = data.body
                        })
                }, 2300)
            } catch (event) {
                console.log(event, 'error getData() - article)')
            }
        }
    },
    getters: {
        getMeta: (state) => state.meta.value,
        getContent: (state) => state.content.value
    }
})