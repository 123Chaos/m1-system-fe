<template>
  <n-space vertical>
    <Search :search-form-config="searchFormConfig" :more="true" @search="onSearch" @more="onSeeMore" />
    <n-spin :show="isTableLoading">
      <n-data-table :columns="TableColumns" :data="TableData" :pagination="paginationConfig" />
    </n-spin>
  </n-space>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getList } from '@/api/module-log/index';
import Search from '@/components/searchform/index.vue';
import { searchFormConfig, paginationConfig, createColumns } from './const';

const router = useRouter();

const TableColumns = createColumns();

const createData = (): any[] => [
  {
    logId: 0,
    content: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  },
  {
    logId: 1,
    content: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  },
  {
    logId: 2,
    content: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  },
  {
    logId: 3,
    content: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  },
  {
    logId: 4,
    content: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  }
];

const TableData = createData();

const isTableLoading = ref(false);

const onSearch = async (form: any) => {
  try {
    isTableLoading.value = true;
    const { data } = await getList(form);
    console.log(data);
  } catch (e) {
    // pass
  } finally {
    isTableLoading.value = false;
  }
};

const onSeeMore = () => {
  router.push('/module-detail');
};

const init = async () => {
  try {
    await getList({});
  } finally {
    // pass
  }
};

onBeforeMount(() => {
  init();
});
</script>
./const
