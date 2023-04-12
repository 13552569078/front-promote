<template>
    <el-button @click="goHome">登陆页面</el-button>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const goHome = () => {
    router.push({
        name: 'homepageIndex'
    })
}

</script>
  