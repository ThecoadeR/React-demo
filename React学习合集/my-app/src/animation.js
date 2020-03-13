/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-13 11:27:51
 * @LastEditTime: 2020-03-13 11:39:25
 */
import React, { Component, Fragment } from 'react'
import './style.css'
class Animation extends Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <Fragment>
      <div className={this.state.show ? 'show' : 'hide'}>This is Animation Component</div>
      <button onClick={this.handleToggle}>Toggle</button>
      </Fragment>
    )
  }
  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default Animation