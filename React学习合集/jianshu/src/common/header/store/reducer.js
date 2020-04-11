/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 20:01:58
 * @LastEditTime: 2020-03-31 22:21:52
 */
import * as actionTypes from './actionType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  hotList: [],
  page: 1,
  totalPage: 1
})

const reducer = (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    // return state.merge({
    //   'hostList': action.value,
    //   // 'totaPage': action.totalPage
    // })
    return state.set('hotList', action.value)
  }
  return state;
}

export default reducer