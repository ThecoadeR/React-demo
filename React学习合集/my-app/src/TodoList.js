/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-11 14:48:36
 * @LastEditTime: 2020-03-14 12:59:57
 */

import React, { Component, Fragment } from 'react'
import { Input, Button, List } from 'antd'
import { getInputChangeAction, addTodoItemAction, DeleteTodoItemAction } from './store/actionCreators'
import Animation from './animation'
import store from './store/index'
import axios from 'axios'
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
    axios.get('/api/todolist')
      .then(res => {
        this.setState(() => {
          return {
            list: res.data
          }
        })
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <Fragment>
        <Input
          value={this.state.inputValue}
          style={{width: 300, marginTop: 10, marginLeft: 10}} 
          placeholder="Todo info" 
          onChange={this.handleValueChange}
        />
        <Button
          style={{marginLeft: 10}}
          type="primary"
          onClick={this.handleAdd}
        >提交</Button>
        <List
          style={{marginLeft: 10, marginTop: 10, width: 300}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {this.handleDelete(index)}}>
              {item} - {index}
            </List.Item>
          )}
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