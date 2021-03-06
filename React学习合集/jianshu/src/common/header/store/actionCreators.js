/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 20:09:52
 * @LastEditTime: 2020-03-31 22:17:58
 */
import * as actionTypes from './actionType'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeList = (value) => ({
  type: actionTypes.CHANGE_LIST,
  value: fromJS(value),
  // totalPage: Math.ceil(value.length / 10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const getHotList = () => {
  return (dispatch) => {
    axios.get('/api/hotList.json').then((res) => {
      const { data } = res.data
      dispatch(changeList(data))
    }).catch((error) => {
      console.log(error)
    })
  }
}