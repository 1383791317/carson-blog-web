<template>
    <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :style="{ padding: '15px' }">
            <LeftRow />
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12" :style="{ padding: '15px' }">
            <a-breadcrumb
                style="background-color: #fff;margin-bottom: 15px;padding: 10px 0 10px 10px;border-radius: 8px;">
                <a-breadcrumb-item href="">
                    <home-outlined />
                    <span>首页</span>
                </a-breadcrumb-item>
                <a-breadcrumb-item>
                    <span>标签-{{ tagName }}</span>
                </a-breadcrumb-item>
            </a-breadcrumb>
            <categoryList :tagId="Number(route.params.id)"/>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :style="{ padding: '15px' }">
            <tagList />
        </a-col>
    </a-row>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import LeftRow from '@/layout/LeftRow.vue'
import categoryList from '@/components/categoryList.vue'
import tagList from '@/components/tagList.vue'
import { HomeOutlined } from '@ant-design/icons-vue';
import { getTagInfo } from '@/api/article'
import { useRoute } from 'vue-router';

const route = useRoute();
const tagsItems = (id: number) => {
    getTagInfo({ id: id}).then(({ apiResultData }) => {
        if('name' in apiResultData){
            tagName.value = apiResultData.name as string
        }
    })
};

const tagName = ref('')
watch(() => route.params.id, () => {
    tagsItems(Number(route.params.id))
})
onMounted(() => {
    tagsItems(Number(route.params.id))
})
</script>