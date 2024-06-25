<template>
  <a-row>
    <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :style="{ padding: '15px' }">
      <LeftRow />
    </a-col>
    <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :style="{ padding: '15px' }">
      <categoryList />
    </a-col>
    <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :style="{ padding: '15px' }">
      <tagList />
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import LeftRow from '@/layout/LeftRow.vue'
import categoryList from '@/components/categoryList.vue'
import tagList from '@/components/tagList.vue'
</script>
