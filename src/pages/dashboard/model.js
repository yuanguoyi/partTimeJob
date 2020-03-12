import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import api from 'api'
import { pathMatchRegexp } from 'utils'
import { model } from 'utils/model'

const { queryHomeList, queryHomeTitle } = api

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    selectedRow: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/dashboard', location.pathname)) {
          // const payload = {
          //   "tableNo":"QmPartInsptaskJob_Task"
          // }
          // dispatch({
          //   type: 'query',
          //   payload,
          // })
        }
      })
    },
  },
  effects: {
    *query({ payload = {} }, { call, put }) {
      const data = yield call(queryHomeTitle, payload)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            titleList: data.data,
          },
        })
      }
    },
    *queryList({ payload = {} }, { call, put }) {
      const data = yield call(queryHomeList, payload)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            ListContent: data.list,
          },
        })
      }
    },
    *queryItem({ payload = {} }, { call, put }) {
      yield put({
        type: 'querySuccess',
        payload: {
          selectedRow: payload,
        },
      })
    },
  },
  reducers: {
    // showModal(state, { payload }) {
    //   return { ...state, ...payload }
    // },
    querySuccess(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
})
