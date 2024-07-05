<template>
      <div>
        <a-card hoverable style="width: 100%">
          <template #title>
            标签
          </template>
          <p @click="() => { $router.push({ name: 'category', params: { id: route.params.id, tag_id: item.id } }) }" v-for="(item, index) in tagsItems">{{ item.name }}</p>
        </a-card>
      </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getTagsAll } from '@/api/article'
const route = useRoute();
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