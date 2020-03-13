/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-11 14:48:36
 * @LastEditTime: 2020-03-13 11:35:19
 */

import React, { Component, Fragment } from 'react'
import Animation from './animation'
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      inputValue: '',
      list: []
    }
    console.log(this.state)
  }
  componentDidMount() {
    // axios.get('/api/todolist')
    //   .then(res => {
    //     this.setState(() => {
    //       return {
    //         list: res.data
    //       }
    //     })
    //   })
    //   .catch(error => console.log(error))
  }
  render() {
    return (
      <Fragment>
        <input
          // ref={(input) => {this.input = input}} ref用法
          className="border"
          value={this.state.inputValue}
          onChange={this.handleValueChange}
        />
        <button onClick={this.handleAdd}>提交</button>
        <ul>
          {this.handleGetItem()}
        </ul>
        <Animation></Animation>
      </Fragment>
    )
  }
  handleGetItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem 
        item={item} 
        key={index} 
        index={index}
        handleDelete={this.handleDelete}
        />
    })
  }
  handleValueChange(event) {
    // const value = this.input.value ref用法
    const value = event.target.value
    this.setState(() => {
      return {
        inputValue: value
      }
    })
  }
  handleAdd() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList