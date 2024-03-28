import { h } from 'vue';
import { NTag } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';
import {} from '@/api/module-log/index';

export const searchFormConfig = [
  {
    type: 'select',
    options: [
      { label: '类型1', value: '1' },
      { label: '类型2', value: '2' }
    ],
    tag: '模型类型',
    value: 'type'
    // validation: () => { },
  },
  {
    type: 'date-picker',
    tag: '使用时间',
    value: 'operateTime'
    // validation: () => { },
  }
];

export const paginationConfig = {
  pageSizes: [2, 5, 10, 20],
  showQuickJumper: true,
  showSizePicker: true
};

export const createColumns = (): DataTableColumns<any> => {
  return [
    {
      title: '变更记录',
      key: 'content',
      align: 'center'
    },
    {
      title: '模型类型',
      key: 'type',
      align: 'center',
      render(row) {
        return h(
          NTag,
          {
            style: {
              marginRight: '6px'
            },
            type: 'info',
            bordered: false
          },
          {
            default: () => row.type
          }
        );
      }
    },
    {
      title: '变更时间',
      key: 'opTime',
      align: 'center'
    }
  ];
};
