<template>
    <div class="index">
        <a-space size="large">
            <a-avatar>A</a-avatar>
            <a-avatar :style="{ backgroundColor: '#3370ff' }">
                <IconUser />
            </a-avatar>
            <a-avatar :style="{ backgroundColor: '#14a9f8' }">Arco</a-avatar>
            <a-avatar :style="{ backgroundColor: '#00d0b6' }">Design</a-avatar>
            <a-avatar>
                <img width="40px" alt="avatar"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
            </a-avatar>
        </a-space>


        <a-carousel :style="{
            width: '600px',
            height: '240px',
        }" :default-current="2" @change="handleChange">
            <a-carousel-item v-for="image in images">
                <img :src="image" :style="{
                    width: '100%',
                }" />
            </a-carousel-item>
        </a-carousel>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})

onMounted(() => {
    useApi().LoginApi.authLogin({
        userName: '',
        password: ''
    }).then(result => {
        console.log('result', result);
    }).catch(error => {
        console.log('error', error);
    })
})

const images = ref([
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    ]);
const handleChange = (value: any) => {
    console.log(value)
}
</script>

<style lang="scss" scoped>

</style>