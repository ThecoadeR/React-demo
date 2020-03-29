/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 14:33:54
 * @LastEditTime: 2020-03-29 17:28:56
 */
import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleGetFocus = this.handleGetFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo href='/' />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className = { this.state.focused ? 'focused' : '' }
                onFocus = { this.handleGetFocus }
                onBlur = { this.handleBlur }
              />
            </CSSTransition>
            <i className={ this.state.focused ? 'focused iconfont' : 'iconfont' }>&#xe617;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="write">
            <i className="iconfont" style={{ paddingRight: 5 }}>&#xe6e5;</i>
            写文章
          </Button>
          <Button className="register">注册</Button>
        </Addition>
          
      </HeaderWrapper>
    )
  }
  handleGetFocus() {
    this.setState({
      focused: true
    })
  }
  handleBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header