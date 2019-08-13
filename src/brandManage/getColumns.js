import React from 'react'
import { selfMap, statusMap, sourceMap } from './setting'

export default function () {
  const columns = [{
    title: '品牌ID',
    dataIndex: 'id',
    key: 'id',
    singleLine: true,
  }, {
    title: '品牌名称',
    dataIndex: 'name',
    key: 'name',
    width: '100px',
  },{
    title: '英文名',
    dataIndex: 'nameEn',
    key: 'nameEn',
    width: 160,
  },{
    title: '品牌卖点',
    dataIndex: 'hotSpots',
    key: 'hotSpots',
    width: 200,
  },{
    title: '品牌介绍',
    dataIndex: 'introduce',
    key: 'introduce',
    width: 200,
  },{
    title: 'Logo',
    dataIndex: 'image',
    key: 'image',
    align: 'center',
  },{
    title: '品牌国家',
    dataIndex: 'stateName',
    key: 'stateName',
    singleLine: true,
  },{
    title: '品牌分值',
    dataIndex: 'rank',
    key: 'rank',
    singleLine: true,
  },{
    title: '是否自有',
    dataIndex: 'isSelfOwn',
    key: 'isSelfOwn',
    singleLine: true,
    render: value => selfMap[value]
  },{
    title: '状态',
    dataIndex: 'isAvailable',
    key: 'isAvailable',
    singleLine: true,
    render: value => statusMap[value]
  },{
    title: '来源',
    dataIndex: 'source',
    key: 'source',
    singleLine: true,
    render: value => sourceMap[value]
  },{
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    direction: 'horizontal',
    render: (value, record) => {
      return (
        <div className="operateBtn-container vertical">
          <a
            onClick={e => this.operateHandle('update', record.id, record)}
          >
            编辑品牌
          </a>
        </div>
      )
    }
  }]
  return columns
}
