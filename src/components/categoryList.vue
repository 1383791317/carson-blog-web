<template>
    <div>
        <a-card hoverable style="width: 100%; margin-top: 10px;" v-for="(item, index) in articleItems">
            <h1><a @click="() => router.push({ name: 'article', params: { id: item.id } })">{{ item.title }}</a></h1>
            <div style="color: #7a7a7a; margin-bottom: 8px;">
                <span><FieldTimeOutlined />  {{ item.created_at }}</span>
                   &nbsp; &nbsp; 
                <span> {{ item.category.name }} </span>
                <a-tag  v-for="(tag) in item.tags" style="color: #7a7a7a;line-height: 18px;margin-left: 18px;"> {{ tag }}</a-tag>
            </div>
            <div style="max-height: 114px;overflow: hidden;text-overflow: ellipsis">
                {{ item.description }}
            </div>
        </a-card>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
import { getArticleList } from '@/api/article'
import { useRouter } from 'vue-router';
import { FieldTimeOutlined } from '@ant-design/icons-vue';
const router = useRouter();
const props = defineProps({
    categoryId: { type: Number, default: 0 },
    tagId: { type: Number, default: 0 },
});
interface ArticleItem {
    id: number;
    title: string;
    created_at:string,
    category:{
        name: string;
    };
    tags: Array<string>;
    description: string;
}
interface ArticleItemRequest {
    category_id?: number;
    tag_id?: number;
}
const articleItems = ref<ArticleItem[]>([])
const getArticleItems = async () => {
    let params: ArticleItemRequest = {}
    if (props.categoryId) {
        params.category_id = props.categoryId;
    }
    if (props.tagId) {
        params.tag_id = props.tagId;
    }
    console.log(params)
    const { apiResultData } = await getArticleList(params) as any;
    articleItems.value =apiResultData.data;
}
watch(() => (props.categoryId,props.tagId), () => {
    getArticleItems()
})
onMounted(() => {
    // 获取文章列表
    getArticleItems()
})
</script>