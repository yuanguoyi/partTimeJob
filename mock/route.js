import { Constant } from './_utils'
const { ApiPrefix } = Constant

const database = [
  {
    id: '1',
    icon: 'dashboard',
    name: '首检',
    zh: {
      name: '首检'
    },
    'pt-br': {
      name: '首检'
    },
  },
  {
    id: '7',
    menuParentId: '1',
    name: '质检任务',
    zh: {
      name: '质检任务'
    },
    'pt-br': {
      name: '首检'
    },
    route: '/dashboard',
  },
  {
    id: '6',
    menuParentId: '1',
    name: '质检项目',
    zh: {
      name: '质检项目'
    },
    'pt-br': {
      name: 'Detalhes do usuário'
    },
    route: '/dashboard/homeDetail',
  },
  
  {
    id: '2',
    breadcrumbParentId: '1',
    name: '来料检',
    zh: {
      name: '来料检'
    },
    'pt-br': {
      name: 'Usuário'
    },
    icon: 'user',
    route: '/user'
    // route: '/comeCheck',
  },
  {
    id: '3',
    breadcrumbParentId: '3',
    name: '巡检',
    zh: {
      name: '巡检'
    },
    'pt-br': {
      name: 'Posts'
    },
    icon: 'shopping-cart',
    route: '/patrolCheck',
  },
  {
    id: '4',
    breadcrumbParentId: '4',
    name: '成品检',
    zh: {
      name: '成品检'
    },
    'pt-br': {
      name: '成品检'
    },
    icon: 'shopping-cart',
    route: '/goodProduct',
  },
  {
    id: '5',
    breadcrumbParentId: '1',
    name: '不合格品',
    zh: {
      name: '不合格品'
    },
    'pt-br': {
      name: '不合格品'
    },
    icon: 'shopping-cart',
    route: '/badProduct',
  },
  
  // {
  //   id: '3',
  //   breadcrumbParentId: '1',
  //   name: 'Request',
  //   zh: {
  //     name: 'Request'
  //   },
  //   'pt-br': {
  //     name: 'Requisição'
  //   },
  //   icon: 'api',
  //   route: '/request',
  // },
  // {
  //   id: '4',
  //   breadcrumbParentId: '1',
  //   name: 'UI Element',
  //   zh: {
  //     name: 'UI组件'
  //   },
  //   'pt-br': {
  //     name: 'Elementos UI'
  //   },
  //   icon: 'camera-o',
  // },
  // {
  //   id: '45',
  //   breadcrumbParentId: '4',
  //   menuParentId: '4',
  //   name: 'Editor',
  //   zh: {
  //     name: 'Editor'
  //   },
  //   'pt-br': {
  //     name: 'Editor'
  //   },
  //   icon: 'edit',
  //   route: '/UIElement/editor',
  // },
  // {
  //   id: '5',
  //   breadcrumbParentId: '1',
  //   name: 'Charts',
  //   zh: {
  //     name: 'Charts'
  //   },
  //   'pt-br': {
  //     name: 'Graficos'
  //   },
  //   icon: 'code-o',
  // },
  // {
  //   id: '51',
  //   breadcrumbParentId: '5',
  //   menuParentId: '5',
  //   name: 'ECharts',
  //   zh: {
  //     name: 'ECharts'
  //   },
  //   'pt-br': {
  //     name: 'ECharts'
  //   },
  //   icon: 'line-chart',
  //   route: '/chart/ECharts',
  // },
  // {
  //   id: '52',
  //   breadcrumbParentId: '5',
  //   menuParentId: '5',
  //   name: 'HighCharts',
  //   zh: {
  //     name: 'HighCharts'
  //   },
  //   'pt-br': {
  //     name: 'HighCharts'
  //   },
  //   icon: 'bar-chart',
  //   route: '/chart/highCharts',
  // },
  // {
  //   id: '53',
  //   breadcrumbParentId: '5',
  //   menuParentId: '5',
  //   name: 'Rechartst',
  //   zh: {
  //     name: 'Rechartst'
  //   },
  //   'pt-br': {
  //     name: 'Rechartst'
  //   },
  //   icon: 'area-chart',
  //   route: '/chart/Recharts',
  // },
]

module.exports = {
  [`GET ${ApiPrefix}/routes`](req, res) {
    res.status(200).json(database)
  },
}
