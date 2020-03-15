/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-14 12:51:58
 * @LastEditTime: 2020-03-15 20:38:11
 */
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, Origin_TODO_ITEM, GET_INIT_LIST } from './actionTypes'
// import axios from 'axios'
// import { message } from 'antd'

export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export const addTodoItemAction = (value) => {
  return {
    type: ADD_TODO_ITEM,
    value
  }
}

export const DeleteTodoItemAction = (value) => {
  return {
    type: DELETE_TODO_ITEM,
    value
  }
}

export const originTodoItem = (value) => {
  return {
    type: Origin_TODO_ITEM,
    value
  }
}

// 使用redux-thunk
// export const getOriginData = () => {
//   // 使用redux-thunk以后 原本的action返回的是个对象 现在可以返回一个函数了
//   return (dispatch) => {
//     axios.get('/api/todolist').then((res) => {
//       if(res.data.code === 200) {
//         const action = originTodoItem(res.data.list)
//         dispatch(action)
//       }
//     }).catch((error) => {
//       console.log(error)
//       message.error('服务器走丢了', 1)
//     })
//   }
// }

// 使用redux-saga中间件
export const getOriginData = () => {
  return {
    type: GET_INIT_LIST
  }
}