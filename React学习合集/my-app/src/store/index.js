/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-13 22:33:23
 * @LastEditTime: 2020-03-15 20:34:33
 */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import TodoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(TodoSagas)
export default store