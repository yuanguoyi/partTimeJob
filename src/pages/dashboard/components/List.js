import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar } from 'antd'
import { DropOption } from 'components'
import { Trans, withI18n } from '@lingui/react'
import Link from 'umi/link'
import { router } from 'utils'
// import styles from './List.less'

const { confirm } = Modal

@withI18n()
class List extends PureComponent {
   // 选中行
   onClickRow = (record) => {
    return {
      onClick: () => {
        router.push(`/dashboard/homeDetail?id=${123}`)
      },
    };
  }

  render() {
    const { onDeleteItem, onEditItem, i18n, ...tableProps } = this.props
    const {titleList,columns} = tableProps
    // const columns = [
    //   {
    //     title: '任务号',
    //     dataIndex: 'name1',
    //     key: 'name1',
    //     width: 72,
    //     fixed: 'left',
    //   },
    //   {
    //     title: '材料号',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
    //   },
    //   {
    //     title: '物料名称',
    //     dataIndex: 'nickName',
    //     key: 'nickName',
    //   },
    //   {
    //     title: '状态',
    //     dataIndex: 'age',
    //     key: 'age',
    //     render:(text,record) =>{
    //       if(text === 1){
    //         return <span>质检完成</span>
    //       }else if(text === 2){
    //         return <span>质检中</span>
    //       }else if(text === 2){
    //         return <span>等待质检</span>
    //       }
    //     }
    //   },
    //   {
    //     title: '检验数量',
    //     dataIndex: 'isMale1',
    //     key: 'isMale1'
    //   },
    //   {
    //     title: '抽样数量',
    //     dataIndex: 'phone',
    //     key: 'phone',
    //   },
    //   {
    //     title: '来源',
    //     dataIndex: 'email',
    //     key: 'email',
    //   },
    //   {
    //     title: '来源单号',
    //     dataIndex: 'address1',
    //     key: 'address1',
    //   },
    //   {
    //     title: '优先级',
    //     dataIndex: 'createTime',
    //     key: 'createTime',
    //   },
    //   {
    //     title: '报检时间',
    //     dataIndex: 'createTime2',
    //     key: 'createTime2',
    //   },
    //   {
    //     title: '检验员',
    //     dataIndex: 'isMale',
    //     key: 'isMale',
    //     fixed: 'right',
    //   }
    // ]

    return (
      <Table
        {...tableProps}
        // className={styles.table}
        bordered
        scroll={{ x: 1200,y: 240}}
        columns={columns}
        simple
        rowKey={record => record.id}
        onRow={this.onClickRow}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
