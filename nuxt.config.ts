// https://v3.nuxtjs.org/api/configuration/nuxt.config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt3-ArcoDesign',
            meta: [
                { name: 'keywords', content: 'Nuxt3,arco-design' },
                { name: 'description', content: '使用 Vue 3 构建您的下一个应用，体验混合渲染、强大的数据获取和新功能。 Nuxt 3 是一个开源框架，使 Web 开发变得简单而强大。' },
            ],
        },
    },
    vite: {
        plugins: [
            AutoImport({
                resolvers: [ArcoResolver()],
            }),
            Components({
                resolvers: [
                    ArcoResolver({
                        sideEffect: true
                    })
                ]
            })
        ],
    },
})
