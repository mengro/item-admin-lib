import { rankList, statusList, isSelfOwnList } from './setting'

export default function () {
  const config = [
    {
      key: 'id',
      type: 'input',
      label: '品牌ID',
      antdOptions: {
        placeholder: '品牌ID',
      },
    },{
      key: 'name',
      type: 'input',
      label: '品牌名称',
      antdOptions: {
        placeholder: '品牌名称',
      },
    },{
      key: 'nameEn',
      type: 'input',
      label: '品牌英文名称',
      antdOptions: {
        placeholder: '品牌英文名称',
      },
    },{
      key: 'isAvailable',
      type: 'select',
      label: '状态',
      data: statusList,
      antdOptions: {
        placeholder: '状态',
      },
    },{
      key: 'rank',
      type: 'select',
      label: '品牌分值',
      labelKey: 'label',
      valueKey: 'code',
      data: rankList,
      antdOptions: {
        placeholder: '品牌分值',
      },
    },{
      key: 'isSelfOwn',
      type: 'select',
      label: '是否自有',
      data: isSelfOwnList,
      antdOptions: {
        placeholder: '是否自有',
      },
    },{
      key: 'categoryId',
      type: 'input',
      label: '类目ID',
      antdOptions: {
        placeholder: '类目ID',
      },
    },{
      key: 'categoryName',
      type: 'input',
      label: '类目名称',
      antdOptions: {
        placeholder: '类目名称',
      },
    }
  ]
  return config
}
