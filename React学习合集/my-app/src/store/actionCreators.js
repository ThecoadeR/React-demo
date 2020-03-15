/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-14 12:51:58
 * @LastEditTime: 2020-03-15 12:09:15
 */
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, Origin_TODO_ITEM } from './actionTypes'

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