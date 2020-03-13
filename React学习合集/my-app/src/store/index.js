/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-13 22:33:23
 * @LastEditTime: 2020-03-13 23:09:29
 */
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store