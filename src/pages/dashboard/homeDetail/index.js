import React, { Component } from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import DetailMain from '../components/DetailMain'
import { connect } from 'dva'
import styles from './index.less'
import { GetUrlParam } from 'utils'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
@Form.create()
@connect(({ homeDetail, loading, dashboard }) => ({
  homeDetail,
  dashboard,
  loading,
}))
class Detail extends Component {
  componentDidMount() {
    const id = GetUrlParam('id')
    const { dispatch, dashboard } = this.props
    const { titleList } = dashboard
    console.log('detail', titleList)
    let params = {
      _params: id,
      _sourceID: 999,
    }
    dispatch({
      type: 'homeDetail/query',
      payload: params,
    })
  }
  state = {}
  render() {
    const { form } = this.props
    const { getFieldDecorator } = form
    return (
      <div className={styles.detailWrap}>
        <div className={styles.detailTopwrap}>
          <Form {...layout}>
            <Row gutter={24}>
              <Col span={6}>
                <Form.Item label="物料号">
                  {getFieldDecorator('number', { initialValue: '12' })(
                    <Input disabled placeholder="请输入物料号" />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="物料名称">
                  {getFieldDecorator('name', { initialValue: '22' })(
                    <Input disabled placeholder="请输入来源单号" />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="规格型号">
                  {getFieldDecorator('spec', { initialValue: '33' })(
                    <Input disabled placeholder="请输入质检员" />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="检验数量">
                  {getFieldDecorator('amount', { initialValue: '300' })(
                    <Input disabled />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={6}>
                <Form.Item label="抽样数量">
                  {getFieldDecorator('sample', { initialValue: '12' })(
                    <Input disabled />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="检验结果">
                  {getFieldDecorator('result', { initialValue: '22' })(
                    <Input disabled />
                  )}
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="检验状态">
                  {getFieldDecorator('status', { initialValue: '33' })(
                    <Input disabled />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
        <DetailMain></DetailMain>
      </div>
    )
  }
}

export default Detail
