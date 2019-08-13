export const rankList = new Array(10).fill('').map((item, index) => ({
  code: index + 1,
  label: `${index + 1}分`
}))

export const noLabelLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 22, offset: 1 },
}

export const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
}

export const statusMap = {
  0: '停用',
  1: '启用',
}

export const statusList = [
  {
    key: 0,
    label: '停用',
    value: 0,
  },{
    key: 1,
    label: '启用',
    value: 1,
  }
]

export const isSelfOwnList = [
  {
    key: 0,
    label: '否',
    value: 0,
  },{
    key: 1,
    label: '是',
    value: 1,
  }
]

export const selfMap = {
  0: '否',
  1: '是',
}

export const sourceMap = {
  0: '平台',
  1: '商家自建',
}

export const titleMap = {
  update: '编辑品牌',
  create: '新增品牌',
  linkCategory: '关联招商类目',
  updateCategory: '编辑招商类目',
  viewCategory: '查看招商类目',
  viewRecord: '查看操作记录',
}

export const pageConfig = {
  tableConfig: {
    rowKey: 'id',
    scroll: {
      x: 1800,
    },
  },
  buttonConfig: {},
  searchConfig: {},
}
