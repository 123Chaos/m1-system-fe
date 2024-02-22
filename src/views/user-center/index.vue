<template>
  <n-space vertical>
    <n-card>
      <n-space vertical style="gap: 20px">
        <n-space>
          <n-space style="display: flex; align-items: center">
            <n-space style="font-weight: bold">修改用户名:</n-space>
            <n-space>
              <n-input v-model:value="formData.newName"></n-input>
            </n-space>
          </n-space>
        </n-space>
        <n-space>
          <n-button quaternary @click="showModal = true">修改密码</n-button>
        </n-space>
        <n-button type="primary" @click="onSubmit">保存</n-button>
      </n-space>
    </n-card>
    <n-modal v-model:show="showModal" preset="dialog">
      <n-form ref="formRef" :model="model" :rules="rules">
        <n-form-item path="password" label="输入新密码">
          <n-input
            v-model:value="model.password"
            type="password"
            placeholder="输入新密码"
            @input="handlePasswordInput"
            @keydown.enter.prevent
          />
        </n-form-item>
        <n-form-item ref="rPasswordFormItemRef" first path="reenteredPassword" label="重复输入新密码">
          <n-input
            v-model:value="model.reenteredPassword"
            :disabled="!model.password"
            type="password"
            placeholder="重复输入新密码"
            @keydown.enter.prevent
          />
        </n-form-item>
      </n-form>
      <n-button @click="onSubmitModal">修改</n-button>
    </n-modal>
  </n-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui';

const formData = ref({
  newName: ''
});
const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const model = ref({
  password: '',
  reenteredPassword: ''
});
const showModal = ref(false);

const validatePasswordStartWith = (_rule: FormItemRule, value: string): boolean => {
  return (
    Boolean(model.value.password) &&
    model.value.password.startsWith(value) &&
    model.value.password.length >= value.length
  );
};

const validatePasswordSame = (_rule: FormItemRule, value: string): boolean => {
  return value === model.value.password;
};

const handlePasswordInput = () => {
  if (model.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: 'password-input' });
  }
};

const onSubmit = () => {
  model.value.password = '1';
};

const onSubmitModal = () => {
  if (model.value?.password === model.value?.reenteredPassword && model.value?.password !== '') {
    // 提交
    showModal.value = !showModal.value;
  }
};
const rules: FormRules = {
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
  reenteredPassword: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['input', 'blur']
    },
    {
      validator: validatePasswordStartWith,
      message: '两次密码输入不一致',
      trigger: 'input'
    },
    {
      validator: validatePasswordSame,
      message: '两次密码输入不一致',
      trigger: ['blur', 'password-input']
    }
  ]
};
</script>
