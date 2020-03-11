import axios from 'axios'
import { cloneDeep, isEmpty } from 'lodash'
import pathToRegexp from 'path-to-regexp'
import { message } from 'antd'
import { CANCEL_REQUEST_MESSAGE } from 'utils/constant'
import qs from 'qs'

const { CancelToken } = axios
window.cancelRequest = new Map()
axios.defaults.withCredentials=true
export default function request(options) {
  let { data, url, method = 'get',headers} = options
  const cloneData = cloneDeep(data)
  
  //axios.defaults.headers.common['Cookie'] = 'access_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImlkIjoxLCJ0ZW5hbnQiOiJET05HSFVBLlBMQU5UMSIsInRJbnN0YW5jZSI6IlBMQU5UMSIsInRtU3lzT3JnSWQiOjAsIm9yZ2FuaXphdGlvbiI6ImRldiIsImFwcF9pcCI6bnVsbH0.PK2qcNifzQ-tvesZrcKiotH1kiJv9rCPfmSH6zcJeuIkK9nCfy_BXd4ZNrLjwPp9w_6cLHYTLk1XwbA87aVrNIualigRZoMxiH7BZ4oYX6Mtq0_f7vxJFkfjCsfIjtj865aPJSHFHDVumjYqpXIf7XeuOYC2gE7ssivlIqPzD4-gwIXWpDm6oJOubO600hXGkJQ2nGtWOx5WywHMY1tkdvDzeFZi2lb6CDeUUHBnRGwwOPGDd2zHRgCaIzjm6RR8_GLwgk32uC0KWbm1aYcHl4lI8GVmE3DYu651lbVDYgMlDs4u7LOJ15fnNExzBFW2PID2YW1Ov6LORGiyTLUDJg'
  try {
    let domain = ''
    const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/)
    if (urlMatch) {
      ;[domain] = urlMatch
      url = url.slice(domain.length)
    }

    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domain + url
  } catch (e) {
    message.error(e.message)
  }

  options.url = url
  options.params = cloneData
  options.headers = {
    'Content-Type': 'application/json',
    'access_token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsImlkIjoxLCJ0ZW5hbnQiOiJET05HSFVBLlBMQU5UMSIsInRJbnN0YW5jZSI6IlBMQU5UMSIsInRtU3lzT3JnSWQiOjAsIm9yZ2FuaXphdGlvbiI6ImRldiIsImFwcF9pcCI6bnVsbH0.PK2qcNifzQ-tvesZrcKiotH1kiJv9rCPfmSH6zcJeuIkK9nCfy_BXd4ZNrLjwPp9w_6cLHYTLk1XwbA87aVrNIualigRZoMxiH7BZ4oYX6Mtq0_f7vxJFkfjCsfIjtj865aPJSHFHDVumjYqpXIf7XeuOYC2gE7ssivlIqPzD4-gwIXWpDm6oJOubO600hXGkJQ2nGtWOx5WywHMY1tkdvDzeFZi2lb6CDeUUHBnRGwwOPGDd2zHRgCaIzjm6RR8_GLwgk32uC0KWbm1aYcHl4lI8GVmE3DYu651lbVDYgMlDs4u7LOJ15fnNExzBFW2PID2YW1Ov6LORGiyTLUDJg'
  }
  options.cancelToken = new CancelToken(cancel => {
    window.cancelRequest.set(Symbol(Date.now()), {
      pathname: window.location.pathname,
      cancel,
    })
  })

  return axios(options)
    .then(response => {
      const { statusText, status, data } = response

      let result = {}
      if (typeof data === 'object') {
        result = data
        if (Array.isArray(data)) {
          result.list = data
        }
      } else {
        result.data = data
      }

      return Promise.resolve({
        success: true,
        message: statusText,
        statusCode: status,
        ...result,
      })
    })
    .catch(error => {
      const { response, message } = error

      if (String(message) === CANCEL_REQUEST_MESSAGE) {
        return {
          success: false,
        }
      }

      let msg
      let statusCode

      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.status
        msg = data.message || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }

      /* eslint-disable */
      return Promise.reject({
        success: false,
        statusCode,
        message: msg,
      })
    })
}
