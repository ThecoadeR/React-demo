/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 20:01:58
 * @LastEditTime: 2020-04-12 15:01:36
 */
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  showScroll: false,
  topicList: [],
  articleList: [],
  recommendList: []
})

const reducer = (state = defaultState, action) => {
  if (action.type === actionTypes.GET_HOME_DATA) {
    return state.merge({
      topicList: fromJS(action.topicList),
      articleList: fromJS(action.articleList),
      recommendList: fromJS(action.recommendList)
    })
  }
  if (action.type === actionTypes.ADD_HOME_LIST) {
    return state.set('articleList', state.get('articleList').concat(action.articleList))
  }
  if (action.type === actionTypes.SHOW_SCROLL) {
    return state.set('showScroll', action.value)
  }
  if (action.type === actionTypes.HIDDEN_SCROLL) {
    return state.set('showScroll', action.value)
  }
  return state;
}

export default reducer