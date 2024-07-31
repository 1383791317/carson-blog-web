<template>
    <a-space direction="vertical" style="width: 100%">
      <a-input-search
        v-model:value="value"
        placeholder="input search text"
        enter-button="提取"
        @search="onSearch"
        :loading="false"
      />
    </a-space>
    <div>
        <a-card v-for="(item, index) in contents" :key="index"  :title="item.title" style="width: 100%;margin-top: 10px;">
            <template #extra><a @click="copyContent(index)">复制</a></template>
             <div v-html="item.content"></div>
        </a-card>
    </div>
  </template>
  <script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { getToolFanqieArticle } from '@/api/article'
  import { message as $message} from 'ant-design-vue';
  const value = ref<string>('');
  const contents = ref();
  const abstract = ref<string>('');
  const onSearch = (searchValue: string):void => {
    getToolFanqieArticle(searchValue).then(({apiResultData} :any) => {
        contents.value = apiResultData.content;
        abstract.value = apiResultData.abstract
    });
  };
  const copyContent = (index:number) :void => {
    navigator.clipboard.writeText(contents.value[index].content);
    $message.success('复制成功');
  }
  </script>
  
  