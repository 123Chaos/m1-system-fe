<template>
  <n-space vertical>
    <n-card>
      <n-space vertical>
        <n-space style="display: flex; align-items: center">
          <n-space>选择用户：</n-space>
          <n-select v-model:value="formData.userId" :options="userOptions" style="width: 150px"></n-select>
        </n-space>
        <n-space></n-space>
        <n-space>
          <n-button type="success" @click="onConfigureModule">配置模型</n-button>
        </n-space>
      </n-space>
    </n-card>
    <n-modal
      v-model:show="showModal"
      preset="dialog"
      title="配置模型"
      positive-text="保存"
      negative-text="关闭"
      @positive-click="onSaveModulePermission"
    >
      <div style="margin: 20px">
        <n-checkbox-group v-model:value="tempModulePermission">
          <n-space item-style="display: flex;">
            <n-checkbox v-for="item in checkboxOptions" :key="item.value" :value="item.value" :label="item.label" />
          </n-space>
        </n-checkbox-group>
      </div>
    </n-modal>
  </n-space>
</template>

<script setup lang="tsx">
import { ref, onBeforeMount } from 'vue';
import { useMessage } from 'naive-ui';

const message = useMessage();
const formData = ref({
  userId: '0',
  modulePermission: ['1', '2', '3']
});
const userOptions = ref([
  {
    label: 'Ming',
    value: '0'
  },
  {
    label: 'Ming1',
    value: '1'
  },
  {
    label: 'Ming2',
    value: '2'
  },
  {
    label: 'Ming3',
    value: '3'
  }
]);
const showModal = ref(false);
const tempModulePermission = ref([]);
const checkboxOptions = ref([
  {
    label: '类型1',
    value: '1'
  },
  {
    label: '类型2',
    value: '2'
  },
  {
    label: '类型3',
    value: '3'
  },
  {
    label: '类型4',
    value: '4'
  }
]);

const onSaveModulePermission = () => {
  // 获取当前用户的模型权限list
  formData.value.modulePermission = [];
  for (const i of tempModulePermission.value) {
    formData.value.modulePermission.push(i);
  }
  message.success('保存成功');
};

const onConfigureModule = () => {
  // 去拿对应用户的module权限并赋值给 tempModulePermission.value
  showModal.value = !showModal.value;
};

const init = () => {
  formData.value.modulePermission = [];
};

onBeforeMount(() => {
  init();
});
</script>
