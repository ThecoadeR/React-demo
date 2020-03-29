/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 17:39:29
 * @LastEditTime: 2020-03-29 20:06:03
 */
import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/reducer'

/**
 * 通过combineReducers来整合多个reducer
 */
const reducer =  combineReducers({
  header: headerReducer
})

export default reducer
