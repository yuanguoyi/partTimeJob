import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card, Tabs } from 'antd'
// import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { Color } from 'utils'
import { Page, ScrollBar } from 'components'
import Filter from './components/Filter'
import styles from './index.less'
import store from 'store'
import List from './components/List'
const { TabPane } = Tabs
@connect(({ app, dashboard, loading }) => ({
  dashboard,
  loading,
}))
class Dashboard extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props
    // 标题接口
    const titparams = {
      tableNo: 'QmPartInsptaskJob_Task',
    }
    dispatch({
      type: 'dashboard/query',
      payload: titparams,
    })
    let initSearch = {
      partNo: '', // E451121D1
      woNo: '', //Wo030300001
      checkUser: '',
    }
    this.getListData(initSearch)
  }
  getListData(value) {
    const { dispatch } = this.props
    // 列表内容接口
    const listparams = {
      _params: value,
      _sourceID: 999,
    }
    dispatch({
      type: 'dashboard/queryList',
      payload: listparams,
    })
  }
  setItem(value) {
    const { dispatch } = this.props
    console.log('1', value)
    // dispatch({
    //   type:'dashboard/showModal',
    //   payload: {
    //     selected: value
    //   }
    // })
  }
  get filterProps() {
    const { location, dispatch } = this.props
    const { query } = location
    return {
      filter: {
        ...query,
      },
      onFilterChange: value => {
        this.getListData(value)
      },
    }
  }
  get listProps() {
    const { dispatch, dashboard, loading } = this.props
    const { titleList, ListContent } = dashboard
    const columns = []
    if (titleList && titleList.length > 0) {
      let json = {}
      titleList.map((v, i) => {
        if (i == 0) {
          json = {
            title: v.label,
            dataIndex: v.prop,
            key: v.prop,
            fixed: 'left',
            width: '50',
          }
        } else if (i == titleList.length - 1) {
          json = {
            title: v.label,
            dataIndex: v.prop,
            key: v.prop,
            fixed: 'right',
            width: '50',
          }
        } else {
          json = {
            title: v.label,
            dataIndex: v.prop,
            key: v.prop,
            width: '50',
          }
        }
        columns.push(json)
      })
    }
    return {
      dataSource: ListContent,
      titleList: titleList,
      columns: columns,
      loading: loading.effects['dashboard/query'],
      onSwitchItem: value => {
        this.setItem(value)
      },
    }
  }
  render() {
    return (
      <Page className={styles.dashboard}>
        <Filter {...this.filterProps} />
        <div style={{ background: '#fff' }}>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  {/* <AppleOutlined /> */}
                  物料列表
                </span>
              }
              key="1"
            >
              <div className={styles.listWrap}>
                <List {...this.listProps} />
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Page>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default Dashboard
