<template>
  <n-space vertical>
    <n-space>
      <div style="display: flex; align-items: center">
        <span>类型：</span>
        <n-select v-model:value="data.type" style="width: 150px" :options="typeOptions"></n-select>
      </div>
      <div style="display: flex; align-items: center">
        <span>模式：</span>
        <n-select v-model:value="mode" style="width: 150px" :options="modeOptions"></n-select>
      </div>
    </n-space>
    <n-space>
      <Cropper :mode="mode" :type="data.type" />
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Cropper } from './components';
import { MODE_FLAG, modeOptions } from './const';

const mode = ref(MODE_FLAG.ARTIFICIAL);

const data = ref({
  type: '1'
});

const typeOptions = ref([
  { label: '类型1', value: '1' },
  { label: '类型2', value: '2' }
]);
</script>
