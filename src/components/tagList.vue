<template>
      <div>
        <a-card hoverable style="width: 100%">
          <template #title>
            标签
          </template>
          <p @click="() => { $router.push({ name: 'tag', params: { id: item.id, name: item.name } }) }" v-for="(item, index) in tagsItems">{{ item.name }}</p>
        </a-card>
      </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getTagsAll } from '@/api/article'

interface TagsItem {
  id: number;
  name: string;
}
const tagsItems = ref<TagsItem[]>([])
const getTagsItems = async () => {
  const response = await getTagsAll();
  tagsItems.value = response.apiResultData as TagsItem[];
}
onMounted(() => {
  //获取所有标签
  getTagsItems()
})
</script>