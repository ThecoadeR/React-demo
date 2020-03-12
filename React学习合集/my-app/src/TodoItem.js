/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-12 13:49:18
 * @LastEditTime: 2020-03-12 16:04:55
 */
import React, { Component } from 'react'
import propTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  render() {
    const { item } = this.props
    return (
      <div onClick={this.handleDelete}>{item}</div>
    )
  }
  handleDelete() {
    const { handleDelete, index } = this.props
    handleDelete(index)
  }
}

TodoItem.propTypes = {
  item: propTypes.string,
  index: propTypes.number,
  handleDelete: propTypes.func
}
export default TodoItem