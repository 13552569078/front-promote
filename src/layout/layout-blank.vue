<template>
  <router-view v-slot="{ Component, route }">
    <KeepAlive>
      <component :is="Component" :key="route.name" v-if="$route.meta.keepAlive" />
    </KeepAlive>
    <component :is="Component" :key="route.name" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>
