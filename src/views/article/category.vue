<template>
    <a-row>
        <!-- <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :style="{ padding: '15px' }">
            <LeftRow />
        </a-col> -->
        <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18" :style="{ padding: '15px' }">
            <a-breadcrumb
                style="background-color: #fff;margin-bottom: 15px;padding: 10px 0 10px 10px;border-radius: 8px;">
                <a-breadcrumb-item href="">
                    <home-outlined />
                    <span>首页</span>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <span>分类-{{ categoryName }}</span>
                    <span v-if="tagName"> & 标签-{{ tagName }}</span>
                </a-breadcrumb-item>
            </a-breadcrumb>
            <categoryList :categoryId="Number(route.params.id)" :tagId="Number(route.params.tag_id)" :keyword="keyword"/>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :style="{ padding: '15px' }">
            <searchInput @updateKeyWord="updateKeyWord" />
            <tagList :style="{ marginTop: '12px' }"/>
        </a-col>
    </a-row>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
// import LeftRow from '@/layout/LeftRow.vue'
import categoryList from '@/components/categoryList.vue'
import tagList from '@/components/tagList.vue'
import { HomeOutlined } from '@ant-design/icons-vue';
import { getCategoryInfo } from '@/api/article'
import { useRoute } from 'vue-router';
import searchInput from '@/components/searchInput.vue'

const route = useRoute();
const categoryName = ref('')
const tagName = ref('')
const keyword = ref('')
interface CategoryInfo {
  category?: { name: string };
  tag?: { name: string };
}

const categoryItems = (id :number,tag_id:number) => {
    getCategoryInfo({ id: id,tag_id:tag_id ? tag_id : 0}).then(({ apiResultData }) => {
        let data = apiResultData as CategoryInfo
        if(data.category){
            categoryName.value = data.category.name as string
        }
        tagName.value = data.tag ? data.tag.name as string : ''
    })
};
const emit = defineEmits(['updateKeyWord'])
const updateKeyWord = (key:string) => {
  keyword.value = key
}
watch(() => route.path, () => {
    categoryItems(Number(route.params.id),Number(route.params.tag_id))
})
onMounted(() => {
    categoryItems(Number(route.params.id),Number(route.params.tag_id))
})
</script>