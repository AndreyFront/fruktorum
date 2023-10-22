import { useFetch } from "nuxt/app"

export default function useFetchApi(url, options = {}) {
    const baseUrl = 'https://devtwit8.ru/api/v1/page/?path='

    return useFetch(baseUrl + url, {
        ...options,
    })
}