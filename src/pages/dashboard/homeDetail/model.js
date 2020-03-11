import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import api from 'api'
import { pathMatchRegexp } from 'utils'
import { model } from 'utils/model'

const { checkTask } = api

export default modelExtend(model, {
  namespace: 'homeDetail',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        // if (pathMatchRegexp('/dashboard/detail', location.pathname)) {
        //   const payload = location.query || { page: 1, pageSize: 10 }
        //   dispatch({
        //     type: 'query',
        //     payload,
        //   })
        // }
      })
    },
  },
  effects: {
    *query({ payload = {} }, { call, put }) {
      const data = yield call(checkTask, payload)
      console.log('check', data)
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            checkDetail: data,
          },
        })
      }
    },
  },
  reducers: {
    querySuccess(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
})
