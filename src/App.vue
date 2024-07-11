<script setup lang="ts">
import TopMenu from './layout/TopMenu.vue'
</script>

<template>
  <a-config-provider :locale="zh_CN">
  <a-layout class="layout">
    <a-layout-header id="components-layout-top"
      :style="{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff', padding: '0 10%' }">
      <TopMenu />
    </a-layout-header>
    <a-layout-content :style="{ padding: '2rem 15%', marginTop: '64px', minHeight: 'calc(100vh - 128px)' }">
      <RouterView />
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Copyright ©2024 <a href="https://yangchaocloud.cn">yangchaocloud.cn</a> All Rights Reserved.<br/>
      <a target="_blank" href="https://beian.miit.gov.cn/">豫ICP备2024073309号</a>
    </a-layout-footer>
  </a-layout>
  </a-config-provider>
</template>
<script lang="ts">
import zh_CN from 'ant-design-vue/lib/locale/zh_CN';
</script>