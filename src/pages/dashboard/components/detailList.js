import React, { PureComponent } from 'react'
import { Form, Button,Input,Row,Col,Table } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
@Form.create()
class DetailMain extends PureComponent{
   render(){
     const {form} = this.props
     const {getFieldDecorator} = form 
     const columns = [
      {
        title: '样本号',
        dataIndex: 'name1',
        key: 'name1',
        width: 72,
        fixed: 'left',
      },
      {
        title: '检测值',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '标准值',
        dataIndex: 'nickName',
        key: 'nickName',
      },
      {
        title: '上限值',
        dataIndex: 'isMale1',
        key: 'isMale1'
      },
      {
        title: '下限值',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: '样本检验结果',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '检验员',
        dataIndex: 'address1',
        key: 'address1',
      },
      {
        title: '检验时间',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: '录入时间',
        dataIndex: 'createTime2',
        key: 'createTime2',
      },
      {
        title: '录入人',
        dataIndex: 'isMale',
        key: 'isMale',
        fixed: 'right',
      }
    ]
    return(
      <div>
        <Form {...layout}>
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="检验项目">
                  {getFieldDecorator('project', { initialValue: '12' })(
                    <Input
                      disabled
                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="分析方法">
                  {getFieldDecorator('fangfa', { initialValue: '22' })(
                    <Input
                      disabled
                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="检验方法">
                  {getFieldDecorator('check', { initialValue: '33' })(
                    <Input
                      disabled
                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="检验结果">
                  {getFieldDecorator('checkResult', { initialValue: '300' })(
                    <Input
                    />
                  )}
              </Form.Item>
            </Col>
           </Row>
           <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="检验标准">
                  {getFieldDecorator('sample', { initialValue: '12' })(
                    <Input
                      disabled
                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="检验仪器">
                  {getFieldDecorator('result', { initialValue: '22' })(
                    <Input
                      disabled

                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="检验站">
                  {getFieldDecorator('status', { initialValue: '33' })(
                    <Input
                      disabled

                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="缺陷等级">
                  {getFieldDecorator('status', { initialValue: '33' })(
                    <Input
                      disabled
                    />
                  )}
              </Form.Item>
            </Col>
           </Row>
           <Row gutter={24}>
            <Col span={6}>
              <Form.Item label="抽检数">
                  {getFieldDecorator('sample', { initialValue: '5' })(
                    <Input
                      disabled
                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="OK数">
                  {getFieldDecorator('result', { initialValue: '5' })(
                    <Input

                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="NG数">
                  {getFieldDecorator('status', { initialValue: '0' })(
                    <Input

                    />
                  )}
              </Form.Item>
            </Col>
           </Row>
         </Form>
         <Table
            bordered
            scroll={{ x: 1200,y: 240}}
            columns={columns}
            simple
            rowKey={record => record.id}
          />
      </div>
      )
   }
}
export default DetailMain;

