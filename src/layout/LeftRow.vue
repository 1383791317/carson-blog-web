<style scoped>
.actions-div p{
    color: black;
    display: block;
    font-size: 13px;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase;
}
.actions-div a{
    color: #363636 !important;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.125;
}
</style>
<template>
    <div style="width: 100%;">
        <a-card hoverable style="width: 100%">
            <template #cover>
                <img alt="example" src="@/assets/images/emo.webp" style="padding:10px"/>
            </template>
            <!-- <template #actions>
                <div class="actions-div">
                    <p>文章</p>
                    <a>174</a>
                </div>
                <div class="actions-div">
                    <p>分类</p>
                    <a>174</a>
                </div>
                <div class="actions-div">
                    <p>标签</p>
                    <a>174</a>
                </div>
            </template> -->
            <a-card-meta title="Carson" description="This is the description">
              
            </a-card-meta>
        </a-card>
    </div>
</template>
<script lang="ts" setup>

</script>