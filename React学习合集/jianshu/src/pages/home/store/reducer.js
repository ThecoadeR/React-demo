/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 20:01:58
 * @LastEditTime: 2020-04-11 17:58:34
 */
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
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
  return state;
}

export default reducer