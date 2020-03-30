/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 17:38:44
 * @LastEditTime: 2020-03-30 22:25:44
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))

export default store