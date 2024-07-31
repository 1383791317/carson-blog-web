<style scoped>
.logo {
  width: 135px;
  height: 31px;
  margin: 13px  16px 10px 0;
  float: left;
  justify-content: center;
  display: flex;align-items: center;
  font-size:1.5em;
  font-weight:900;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
<template>
  <div class="logo" @click="() => $router.push({ name: 'home'})"> Carson的博客 </div>
  <a-menu mode="horizontal" triggerSubMenuAction="hover" @click="handleMenuItemClick">
    <template v-for="(item, index) in menusItems">
      <a-sub-menu v-if="item.children" :key="item.key" :title="item.title"
        style="width: 100px;display: flex;justify-content: center;align-items: center;">
        <a-menu-item v-for="subItem in item.children" :key="subItem.key">
          {{ subItem.title }}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else style="width: 100px;display: flex;justify-content: center;align-items: center;" :key="item.key">
        {{ item.label }}
      </a-menu-item>
    </template>
    <a-sub-menu style="width: 100px;display: flex;justify-content: center;align-items: center;"  title="工具">
      <a-menu-item @click="() => $router.push({ name: 'tool_fanqie'})">
       番茄小说提取
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script lang="ts" setup>
import { h, ref, onMounted } from 'vue';
import { getMenu } from '@/api/article'
import { useRouter } from 'vue-router';
const router = useRouter();
interface menusItems {
  key: string;
  title: string;
  label: string;
  children: menusItems[];
}
const menusItems = ref<menusItems[]>([]);
const handleMenuItemClick = ({ key }: any) => {
  router.push({
    name: 'category', 
    params: { id: key } 
  });
};

onMounted(() => {
  getMenu().then(({ apiResultData }) => {
    menusItems.value = apiResultData as menusItems[]
  })
})

</script>