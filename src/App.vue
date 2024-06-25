<script setup lang="ts">
import TopMenu from './layout/TopMenu.vue'
</script>

<template>
  <a-layout class="layout">
    <a-layout-header id="components-layout-top"
      :style="{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', padding: '0 10%' }">
      <TopMenu />
    </a-layout-header>
    <a-layout-content :style="{ padding: '2rem 15%', marginTop: '64px', minHeight: 'calc(100vh - 128px)' }">
      <RouterView />
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>