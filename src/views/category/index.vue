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
                    <span>分类-{{ categoryName }}</span>
                </a-breadcrumb-item>
            </a-breadcrumb>
            <categoryList :categoryId="Number(route.params.id)"/>
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
import { getCategoryInfo } from '@/api/article'
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryItems = (id :number) => {
    getCategoryInfo({ id: id}).then(({ apiResultData }) => {
        if('name' in apiResultData){
            categoryName.value = apiResultData.name as string
        }
    })
};

const categoryName = ref('')
watch(() => route.params.id, () => {
    categoryItems(Number(route.params.id))
})
onMounted(() => {
    categoryItems(Number(route.params.id))
})
</script>