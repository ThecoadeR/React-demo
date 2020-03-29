/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 14:33:54
 * @LastEditTime: 2020-03-29 16:48:51
 */
import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
class Header extends Component {
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
            <NavSearch></NavSearch>
            <i className="iconfont">&#xe617;</i>
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
}

export default Header