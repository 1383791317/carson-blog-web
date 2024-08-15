<template>
    <div>
      <a-card hoverable style="width: 100%">
        <a-input-search
            placeholder="搜索"
            @search="onSearch"/>
      </a-card>
    </div>
</template>
<script lang="ts" setup>
const emit = defineEmits(['updateKeyWord']);
const onSearch = (value: string) => {
    emit('updateKeyWord', value);
};
</script>