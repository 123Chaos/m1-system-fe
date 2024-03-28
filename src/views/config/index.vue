<template>
  <n-space vertical style="gap: 20px">
    <n-space>
      <n-space style="display: flex; align-items: center">
        <n-space style="font-weight: bold; min-width: 100px">用户:</n-space>
        <n-space>
          <n-select
            v-model:value="formData.userName"
            :options="optionsUserName"
            style="width: 300px"
            @update:value="onUpdateUser('')"
          />
        </n-space>
      </n-space>
    </n-space>
    <n-space>
      <n-space style="display: flex; align-items: center">
        <n-space style="font-weight: bold; min-width: 100px">配置模型:</n-space>
        <n-space>
          <n-select v-model:value="formData.modulePermission" multiple :options="moduleList" style="width: 300px" />
        </n-space>
      </n-space>
    </n-space>
    <n-space>
      <n-space style="display: flex; align-items: center">
        <n-space style="font-weight: bold; min-width: 100px">上传间隔:</n-space>
        <n-space>
          <n-select v-model:value="formData.uploadInterval" :options="optionsTab1Interval" style="width: 300px" />
        </n-space>
      </n-space>
    </n-space>
    <n-space>
      <n-space style="display: flex; align-items: center">
        <n-space style="font-weight: bold; min-width: 100px">任务分配:</n-space>
        <n-space>
          <n-input-number v-model:value="formData.mission" style="width: 300px" clearable></n-input-number>
        </n-space>
      </n-space>
    </n-space>
    <n-space vertical>
      <n-space>
        <n-space style="font-weight: bold; min-width: 100px">主页通知:</n-space>
        <n-space>
          <n-switch v-model:value="formData.isOpenNotice">
            <template #checked>启用</template>
            <template #unchecked>停用</template>
          </n-switch>
        </n-space>
      </n-space>
      <n-space>
        <n-input
          v-model:value="formData.noticeContent"
          placeholder="请输入通知栏内容"
          type="textarea"
          style="width: 410px; margin-top: 10px"
          :autosize="{
            minRows: 3,
            maxRows: 5
          }"
          :disabled="!formData.isOpenNotice"
        />
      </n-space>
    </n-space>
    <n-button type="primary" @click="onSubmit">保存</n-button>
  </n-space>
</template>

<script setup lang="tsx">
import { ref } from 'vue';
import { optionsTab1Interval } from './const';

const formData = ref({
  userId: '0',
  userName: '0',
  isOpenNotice: true,
  noticeContent: '',
  uploadInterval: '0',
  mission: 0,
  modulePermission: []
});

const optionsUserName = [
  {
    label: '全局',
    value: '0'
  },
  {
    label: 'Ming',
    value: '1'
  },
  {
    label: 'Super001',
    value: '2'
  },
  {
    label: 'Admin002',
    value: '3'
  },
  {
    label: 'User003',
    value: '4'
  }
];

const moduleList = ref([
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

const onUpdateUser = (userNo: string) => {
  if (userNo === '') {
    // 调用nextTick
  }
  if (userNo === '') {
    // 调用nextTick
  }
};

const onSubmit = () => {
  console.log(formData.value);
};
</script>
