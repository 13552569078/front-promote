<template>
  <template v-for="menu in menuList" :key="menu.path">
    <template v-if="menu.children && menu.children.length">
      <el-sub-menu :index="menu.path" :popper-append-to-body="true" :fallback-placements="['right-start']">
        <template #title>
          <el-icon v-if="menu.meta.icon">
            <component :is="menu.meta.icon" color="#5281E9" :size="20"></component>
          </el-icon>
          <span v-else style="width:20px;"></span>
          <span>{{ menu.meta.title }}</span>
        </template>
        <menuItem :menuList="menu.children" :parentPath="parentPath + '/' + menu.path" class="route-items" />
      </el-sub-menu>
    </template>
    <el-menu-item :index="getRoutePath(menu)" :key="menu.name" v-if="!menu.meta?.hiddenMenu && !menu.children">
      <template #title>
        <el-icon v-if="menu.meta.icon" style="width:20px">
          <component :is="menu.meta.icon" color="#5281E9"></component>
        </el-icon>
        <span v-else style="width:20px;"></span>
        {{ menu.meta.title }}
      </template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { menuListPros } from '@/types/detail';

const props = defineProps({
  menuList: {
    type: Array as PropType<menuListPros[]>,
    default: () => [],
  },
  parentPath: {
    type: String,
    default: '',
  }
}
)

const getRoutePath = (menu: any) => {
  return (props.parentPath + '/' + menu.path).replaceAll('//', '/');
};

</script>
