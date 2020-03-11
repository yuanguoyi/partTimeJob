/* global document */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FilterItem } from 'components'
import { Trans, withI18n } from '@lingui/react'
import { Form, Button, Row, Col, DatePicker, Input,Card } from 'antd'
import city from 'utils/city'
import '../index.less'
const { Search } = Input
const { RangePicker } = DatePicker

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}

@withI18n()
@Form.create()
class Filter extends Component {
  handleFields = fields => {
    const { createTime } = fields
    if (createTime.length) {
      fields.createTime = [
        moment(createTime[0]).format('YYYY-MM-DD'),
        moment(createTime[1]).format('YYYY-MM-DD'),
      ]
    }
    return fields
  }

  handleSubmit = () => {
    const { onFilterChange, form } = this.props
    const { getFieldsValue } = form

    let fields = getFieldsValue()
    onFilterChange(fields)
  }

  handleReset = () => {
    const { form } = this.props
    const { getFieldsValue, setFieldsValue } = form

    const fields = getFieldsValue()
    for (let item in fields) {
      if ({}.hasOwnProperty.call(fields, item)) {
        if (fields[item] instanceof Array) {
          fields[item] = []
        } else {
          fields[item] = undefined
        }
      }
    }
    setFieldsValue(fields)
    this.handleSubmit()
  }
  handleChange = (key, values) => {
    const { form, onFilterChange } = this.props
    const { getFieldsValue } = form

    let fields = getFieldsValue()
    fields[key] = values
    fields = this.handleFields(fields)
    onFilterChange(fields)
  }

  render() {
    const { onAdd, filter, form, i18n } = this.props
    const { getFieldDecorator } = form
    const { name, address } = filter

    let initialCreateTime = []
    if (filter.createTime && filter.createTime[0]) {
      initialCreateTime[0] = moment(filter.createTime[0])
    }
    if (filter.createTime && filter.createTime[1]) {
      initialCreateTime[1] = moment(filter.createTime[1])
    }

    return (
      <div className="filter-wrap">
      <Card title="查询条件" className="fiterCard"  bordered>
         <Form {...layout}>
          <Row gutter={24}>
            <Col span={7}>
              <Form.Item label="物料">
                  {getFieldDecorator('partNo', { initialValue: '' })(
                    <Input
                      placeholder="请输入物料号"
                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="来源单号">
                  {getFieldDecorator('woNo', { initialValue: '' })(
                    <Input
                      placeholder="请输入来源单号"

                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item label="质检员">
                  {getFieldDecorator('checkUser', { initialValue: '' })(
                    <Input
                      placeholder="请输入质检员"
                    />
                  )}
              </Form.Item>
            </Col>
            <Col span={3}>
              <Button
                type="primary"
                className="margin-right"
                onClick={this.handleSubmit}
                style={{marginTop:'3px'}}
              >
                搜索
              </Button>
            </Col>
           </Row>
         </Form>
      </Card>
      </div>
    )
  }
}

Filter.propTypes = {
  onAdd: PropTypes.func,
  form: PropTypes.object,
  filter: PropTypes.object,
  onFilterChange: PropTypes.func,
}

export default Filter
