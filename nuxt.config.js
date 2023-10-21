import pugPlugin from "vite-plugin-pug"

export default defineNuxtConfig({
    devtools: { enabled: false },
    ssr: true,
    vite: {
        plugins: [
            pugPlugin({ localImports: true }, { baseUrl: '/app/' }),
        ],
    },
    bridge: {
        vite: true,
        nitro: true
    },
    routeRules: {
        '/': { redirect: '/home' }
    },
    srcDir: 'app/',
    components: [
        '~/components',
        '~/section',
        '~/middleware',
        '~/icon-system',
        '~/ui',
    ],
    modules: [
        '@pinia/nuxt',
    ],
    css: [
        '/assets/styles/main.scss'
    ]
})