<template>
    <div class="common-layout">
        <el-container class="layout-wrap">
            <el-header class="layout-header" style="--el-header-height:62px;">
                <span>Front-Dy</span>
                <span>ZHJ</span>
            </el-header>
            <el-container>
                <Layout-menu></Layout-menu>
                <el-main>
                    <el-page-header @back="$router.go(-1)" :icon="ArrowLeft" style="margin-bottom:20px;" :title="title">
                        <template #content>
                            <span class="text-large font-600 mr-3"> {{ pageTitle }} </span>
                        </template>
                    </el-page-header>
                    <router-view v-slot="{ Component, route }">
                        <component :is="Component" :key="route.name" />
                    </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import { template } from 'lodash-es';
import { ArrowLeft } from '@element-plus/icons-vue'
import LayoutMenu from './menu.vue';

const route = useRoute();
const router = useRouter();

const title = ref("返回");
const meta = computed(() => route.meta);
const pageTitle = computed(() => template((meta?.value.title as string) || '')(Object.assign({}, route.params, route.query)));
</script>
  