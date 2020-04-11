/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 17:49:23
 * @LastEditTime: 2020-04-11 17:58:02
 */
import axios from 'axios'
import * as actionTypes from './actionTypes'
const getHomeData = (result) => ({
  type: actionTypes.GET_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = getHomeData(result)
      dispatch(action)
    })
  }
}