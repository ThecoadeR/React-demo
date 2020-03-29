/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 17:38:44
 * @LastEditTime: 2020-03-29 19:59:22
 */
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store