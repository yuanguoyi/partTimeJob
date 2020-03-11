import React, { PureComponent } from 'react'
import { Tabs, Button } from 'antd';
import DetailList from './detailList'
import styles from '../homeDetail/index.less'
const { TabPane } = Tabs;
const operations = <div>

  <Button  className={styles.btn} type="primary">参照图片</Button>
  <Button className={styles.btn} type="primary">缺陷图片</Button>
  <Button className={styles.btn} type="primary">仪器校验</Button>
  <Button  type="primary">校验完成</Button>
</div>;
class DetailMain extends PureComponent{

   render(){
    return(
      <div className={styles.detailMain}>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="检查项目" key="1">
            <DetailList></DetailList>
          </TabPane>
          <TabPane tab="缺陷记录" key="2">
            Content of tab 2
          </TabPane>
        </Tabs>
      </div>
      )
   }
}
export default DetailMain;