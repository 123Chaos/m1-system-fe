<template>
  <n-space vertical>
    <top-chart />
    <n-card title="权限控制">
      <n-space vertical>
        <n-space>账号：Super 密码：super123</n-space>
        <n-divider />
        <n-space>账号：Admin 密码：admin123</n-space>
        <n-divider />
        <n-space>账号：User01 密码：user01123</n-space>
      </n-space>
    </n-card>
  </n-space>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { getJoke } from '@/api/dashboard';
import { TopChart } from './components';

onBeforeMount(async () => {
  await getJoke({ aa: 'aa' });
});
</script>

<style scoped></style>
