<template>
  <n-space vertical>
    <SearchForm :search-form-config="searchFormConfig" @search="onSearch" @reset="onReset" />
    <n-data-table :columns="TableColumns" :data="TableData" :pagination="pagination" />
  </n-space>
</template>

<script setup lang="tsx">
import { h } from 'vue';
import { NTag } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';
import { searchFormConfig } from './constants';
import { SearchForm } from './components';

const createColumns = (): DataTableColumns<any> => {
  return [
    {
      title: '操作记录',
      key: 'opLog',
      align: 'center',
      render(row) {
        return h(
          NTag,
          {
            style: {
              marginRight: '6px'
            },
            color: { color: 'transparent', textColor: '#328af1' },
            bordered: false
          },
          {
            default: () => row.opLog
          }
        );
      }
    },
    {
      title: '操作人',
      key: 'operator',
      align: 'center'
    },
    {
      title: '操作时间',
      key: 'opTime',
      align: 'center'
    }
  ];
};
const createData = (): any[] => [
  {
    logId: 0,
    opLog: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  },
  {
    logId: 1,
    opLog: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  },
  {
    logId: 2,
    opLog: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  },
  {
    logId: 3,
    opLog: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  },
  {
    logId: 4,
    opLog: '创建了这个页面',
    opTime: '2024/2/3 20:09',
    type: '类型1',
    operator: 'Ming'
  }
];

const TableData = createData();
const TableColumns = createColumns();
const pagination = {
  pageSizes: [2, 5, 10, 20],
  showQuickJumper: true,
  showSizePicker: true
};

const onSearch = () => {
  // console.log(searchForm);
};

const onReset = () => {
  // console.log(searchForm);
};
</script>
