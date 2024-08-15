<style>
.item-box {
    h1, h2, h3, h4, h5, h6{
        font-weight: 700;
    }
    pre>code {
        word-wrap: normal;
        font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
        -webkit-hyphens: none;
        hyphens: none;
        line-height: 1.5;
        margin: .5em 0;
        overflow: auto;
        padding: 1em;
        tab-size: 4;
        text-align: left;
        text-shadow: 0 1px #fff;
        white-space: pre;
        word-break: normal;
        word-spacing: normal;
        background-color: var(--w-e-textarea-slight-bg-color);
        border: 1px solid var(--w-e-textarea-slight-border-color);
        border-radius: 4px 4px;
        display: block;
        font-size: 14px;
        text-indent: 0;
    }
}
</style>
<template>
    <a-row>
        <!-- <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :style="{ padding: '15px' }">
            <LeftRow />
        </a-col> -->
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" :style="{ padding: '15px' }">
            <a-card>
                <h1> <a href="#">{{ article.title }}</a></h1>
                <div style="color: #7a7a7a; margin-bottom: 8px;">
                    <span>
                        <FieldTimeOutlined /> {{ article.created_at }}
                    </span>
                    &nbsp; &nbsp;
                    <a-tag v-for="(tag) in article.tags" style="color: #7a7a7a;line-height: 18px;margin-left: 18px;"> {{
            tag.name }}</a-tag>
                </div>
                <div class="item-box w-e-text" v-html="article.content"></div>
            </a-card>
        </a-col>
    </a-row>
</template>
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css';
import LeftRow from '@/layout/LeftRow.vue'
import { useRoute } from 'vue-router'
import { getArticleDetail } from '@/api/article'
import { type articleDetailResponse } from '@/api/types/article'
import { FieldTimeOutlined } from '@ant-design/icons-vue';
import { ref, onMounted } from 'vue'
const route = useRoute()
const article = ref(<articleDetailResponse>{})
onMounted(() => {
    getArticleDetail(Number(route.params.id)).then(({ apiResultData }) => {
        article.value = apiResultData as articleDetailResponse
    })
})
</script>