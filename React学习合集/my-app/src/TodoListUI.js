/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-15 13:27:38
 * @LastEditTime: 2020-03-15 13:43:35
 */
import React, { Component, Fragment } from 'react'
import { Input, Button, List, message } from 'antd'

class TodoListUI extends Component {
  
  render() {
    return (
      <Fragment>
        <Input
        value={this.props.inputValue}
        style={{width: 300, marginTop: 10, marginLeft: 10}} 
        placeholder="Todo info" 
        onChange={this.props.handleValueChange}
      />
      <Button
        style={{marginLeft: 10}}
        type="primary"
        onClick={this.props.handleAdd}
      >提交</Button>
      <List
        style={{marginLeft: 10, marginTop: 10, width: 300}}
        bordered
        dataSource={this.props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(index) => {this.props.handleDelete(index)}}>
            {item} - {index}
          </List.Item>
        )}
      />
    </Fragment>
    )
  }
}

export default TodoListUI