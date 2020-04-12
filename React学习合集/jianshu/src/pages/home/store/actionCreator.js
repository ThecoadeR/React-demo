/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 17:49:23
 * @LastEditTime: 2020-04-12 15:01:15
 */
import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const getHomeData = (result) => ({
  type: actionTypes.GET_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (result) => ({
  type: actionTypes.ADD_HOME_LIST,
  articleList: fromJS(result.articleList)
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

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/moreList.json').then((res) => {
      const result = res.data.data
      console.log(result)
      const action = addHomeList(result)
      dispatch(action)
    })
  }
}

export const showScroll = () => {
  return (dispatch) => {
    const action = {
      type: actionTypes.SHOW_SCROLL,
      value: true
    }
    dispatch(action)
  }
}

export const hiddenScroll = () => {
  return (dispatch) => {
    const action = {
      type: actionTypes.HIDDEN_SCROLL,
      value: false
    }
    dispatch(action)
  }
}