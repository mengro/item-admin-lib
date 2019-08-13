import { message } from 'antd'

export default function () {
  const buttons = [{
    key: 'start',
    name: '启用',
    checkSelection: true,
    requireConfirm: true,
    autoUpdateList: true,
    handle: ({selectedRowKeys}) => {
      return // promise
    }
  }, {
    key: 'end',
    name: '停用',
    checkSelection: true,
    requireConfirm: true,
    autoUpdateList: true,
    handle: ({selectedRowKeys}) => {
      return // promise
    }
  }]
  return buttons
}
