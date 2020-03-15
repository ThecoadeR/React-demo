/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-11 14:48:36
 * @LastEditTime: 2020-03-15 13:43:56
 */

import React, { Component, Fragment } from 'react'
import { getInputChangeAction, addTodoItemAction, DeleteTodoItemAction, originTodoItem } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import Animation from './animation'
import store from './store/index'
import axios from 'axios'
import { message } from 'antd'
import 'antd/dist/antd.css'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange) // 订阅组件变化 
  }

  componentDidMount() {
    axios.get('/api/todolist').then((res) => {
      if(res.data.code === 200) {
        const getOriginData = originTodoItem(res.data.list)
        store.dispatch(getOriginData)
      }
    }).catch((error) => {
      console.log(error)
      message.error('服务器走丢了', 1)
    })
  }
  render() {
    return (
      <Fragment>
        <TodoListUI 
          inputValue={this.state.inputValue}
          handleValueChange={this.handleValueChange}
          handleAdd={this.handleAdd}
          list={this.state.list}
          handleDelete={this.handleDelete}
        />
        <Animation></Animation>
      </Fragment>
    )
  }
  handleValueChange(e) {
    // 创建一个action type表示要做啥 value 表示需要传递的值
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    // 使用actionCreators统一创建和管理action
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action) //store接收到事件以后 需要转发给reducers 交由reducers处理
  }
  handleStoreChange() {
    this.setState(store.getState()) // 感知到组件内容变化以后 重新获取store里到内容
  }
  handleAdd() {
    // const action = {
    //   type: ADD_TODO_ITEM,
    //   value: this.state.inputValue
    // }
    const action = addTodoItemAction(this.state.inputValue)
    store.dispatch(action)
  }
  handleDelete(index) {
  //  const action = {
  //    type: DELETE_TODO_ITEM,
  //    value: index
  //  }
    const action = DeleteTodoItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList