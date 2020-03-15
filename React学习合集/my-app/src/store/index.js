/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-13 22:33:23
 * @LastEditTime: 2020-03-15 14:27:32
 */
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
  )

export default store