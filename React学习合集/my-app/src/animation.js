/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-13 11:27:51
 * @LastEditTime: 2020-03-13 14:30:57
 */
import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.css'
class Animation extends Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <Fragment>
        <h3>CSS过渡动画</h3>
        <hr></hr>
        <div className={this.state.show ? 'show' : 'hide'}>This is Animation Component</div>
        <button onClick={this.handleToggle}>Toggle</button>
        <h3>CSSTransition的使用</h3>
        <hr></hr>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit // 销毁dom
          onEntered={(el) => { el.style.color='blue' }}
          appear={true}
        >
          <div>This is CSSTransition Component</div>
        </CSSTransition>
        <button onClick={this.handleChange}>Change</button>
      </Fragment>
    )
  }
  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
  handleChange() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}

export default Animation