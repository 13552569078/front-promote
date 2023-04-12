<template>
    <el-aside style="--el-aside-width:230px;" class="layout-menu">
        <el-menu class="el-menu-vertical-demo" :default-active="defaultActive" :unique-opened="true" :collapse="isCollapse" :router="true">
            <menuItem :menuList="moreChildren">
            </menuItem>
        </el-menu>
    </el-aside>
</template>
<script lang="ts" setup>
import menuItem from '@/layout/menuItem.vue';

const route = useRoute();
const router = useRouter();

watch(
    () => route.path,
    () => {
        setDefaultActive();
    }
);

const isCollapse = ref(false)
const defaultActive = ref<string>('');
const menuList = ref<any[]>([]);

const moreChildren = computed(() => menuList.value.filter(m => !m?.meta?.onlyOne && !m?.meta?.hasParent));

const { proxy } = getCurrentInstance()!;
const routeList = proxy?.$router.getRoutes() || [];

routeList.forEach(item => {
    if (item.meta?.menu && item.children && item.children.length > 0) {
        item.children = item.children.filter(sonItem => !sonItem.meta?.hiddenMenu);
        menuList.value.push(item);
    }
});

const setDefaultActive = () => {
    const { path } = route;
    defaultActive.value = path;
};

menuList.value.sort((m1, m2) => ((m1.meta?.sort ?? 0) as number) - ((m2.meta?.sort ?? 0) as number));

onMounted(() => {
    setDefaultActive();
});
</script>