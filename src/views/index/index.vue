<template>
  <a-row>
    <!-- <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :style="{ padding: '15px' }">
      <LeftRow />
    </a-col> -->
    <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" :style="{ paddingTop: '5px' }">
      <categoryList :keyword="String(keyword)" />
    </a-col>
    <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :style="{ padding: '15px' }">
      <searchInput @updateKeyWord="updateKeyWord" />
      <tagList :style="{ marginTop: '12px' }"/>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
// import LeftRow from '@/layout/LeftRow.vue'
import { reactive, ref } from 'vue'
import categoryList from '@/components/categoryList.vue'
import tagList from '@/components/tagList.vue'
import searchInput from '@/components/searchInput.vue'
const keyword = ref('')
const emit = defineEmits(['updateKeyWord'])
const updateKeyWord = (key:string) => {
  keyword.value = key
}
</script>
