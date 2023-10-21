import { defineStore } from 'pinia'
import useFetchApi from '@/middleware/useFetchApi'

export default defineStore('index', {
    state: () => {
        return {
            meta: ref({}),
            content: ref([]),
            fetchError: false
        }
    },
    actions: {
        getData(payload) {
            this.meta.value = {}
            this.content.value = []
            this.fetchError = false
            
            try {
                setTimeout(() => {
                    useFetchApi(`${payload}`)
                        .then((responce) => {
                            const data = responce.data.value
                            this.meta.value = data.meta
                            this.content.value = data.body
                        })
                        .catch((error) => {
                            console.log('error: ', error)
                            this.fetchError = true
                        })
                }, 2300)
            } catch (event) {
                console.log(event, 'error getData() - article)')
                this.fetchError = true
            }
        }
    },
    getters: {
        getMeta: (state) => state.meta.value,
        getContent: (state) => state.content.value,
        getFetchError: (state) => state.fetchError
    }
})