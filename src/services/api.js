export default {
  queryRouteList: '/routes',
  queryHomeList: 'POST /qms/part/insptask/queryInspTask', // 首检列表
  queryHomeTitle: 'POST /base/quercondition/quercond/queryTableColumn', // 首检标题
  checkTask: 'POST /qms/part/insprecord/queryInspRecord',  // 检验项目详细
  yangListDetail: 'POST /qms/part/insprecord/queryInspRecordDetail', // 样本列表数据
  queryUserInfo: '/user',
  logoutUser: '/user/logout',
  loginUser: 'POST /user/login',

  queryUser: '/user/:id',
  queryUserList: '/users',
  updateUser: 'Patch /user/:id',
  createUser: 'POST /user',
  removeUser: 'DELETE /user/:id',
  removeUserList: 'POST /users/delete',

  queryPostList: '/posts',

  queryDashboard: '/dashboard',
}
