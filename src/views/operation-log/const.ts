import { h } from 'vue';
import { NTag } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';

export const createColumns = (): DataTableColumns<any> => {
  return [
    {
      title: '操作记录',
      key: 'content',
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
            default: () => row.content
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

export const paginationConfig = {
  pageSizes: [2, 5, 10, 20],
  showQuickJumper: true,
  showSizePicker: true
};

export const searchFormConfig = [
  {
    type: 'input',
    tag: '操作记录',
    value: 'opLog'
    // validation: () => { },
  },
  {
    type: 'input',
    tag: '操作人',
    value: 'operator'
    // validation: () => { },
  },
  {
    type: 'date-picker',
    tag: '操作时间',
    value: 'operateTime'
    // validation: () => { },
  }
];
