// searchForm配置
export const searchFormConfig = [
  {
    type: 'select',
    options: [{ label: '类型1', value: '1' }, { label: '类型2', value: '2' }],
    tag: '类型',
    value: 'type',
    validation: () => { },
  },
  {
    type: 'input',
    tag: '操作人',
    value: 'operator',
    validation: () => { },
  },
  {
    type: 'date-picker',
    tag: '操作时间',
    value: 'operateTime',
    validation: () => { },
  }
]

// table配置
export const tableColumnsConfig = []