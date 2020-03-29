/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 20:01:58
 * @LastEditTime: 2020-03-29 20:25:47
 */
import * as actionTypes from './actionType'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
})

const reducer = (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state;
}

export default reducer