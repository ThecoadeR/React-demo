/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-15 17:40:16
 * @LastEditTime: 2020-03-15 20:37:29
 */
import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { originTodoItem } from './actionCreators'
import { GET_INIT_LIST } from './actionTypes'

function* getInitList() {
  try {
    const res = yield axios.get('/api/todolist')
    const action = originTodoItem(res.data.list)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}

function* mySaga() {
  // 捕捉每一个action的类型
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga