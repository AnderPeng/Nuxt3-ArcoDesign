import { defineNuxtPlugin } from '#app'

// 解决移动端 页面跳转滚动条不在顶部的问题
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$router.options.scrollBehavior = (to: any, from: any, savedPosition: any) => {
        return savedPosition || { left: 0, top: 0 }
    }
})