/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-15 13:27:38
 * @LastEditTime: 2020-03-15 15:06:06
 */
import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <Fragment>
        <Input
        value={props.inputValue}
        style={{width: 300, marginTop: 10, marginLeft: 10}} 
        placeholder="Todo info" 
        onChange={props.handleValueChange}
      />
      <Button
        style={{marginLeft: 10}}
        type="primary"
        onClick={props.handleAdd}
      >提交</Button>
      <List
        style={{marginLeft: 10, marginTop: 10, width: 300}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(index) => {props.handleDelete(index)}}>
            {item} - {index}
          </List.Item>
        )}
      />
    </Fragment>
  )
}

export default TodoListUI