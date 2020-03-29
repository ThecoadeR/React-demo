/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 14:33:54
 * @LastEditTime: 2020-03-29 20:24:27
 */
import React from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import * as actionCreator  from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'

const Header = (props) => {
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
              in={ props.focused }
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className = { props.focused ? 'focused' : '' }
                onFocus = { props.handleGetFocus }
                onBlur = { props.handleBlur }
              />
            </CSSTransition>
            <i className={ props.focused ? 'focused iconfont' : 'iconfont' }>&#xe617;</i>
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
const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetFocus() {
      dispatch(actionCreator.searchFocus())
    },
    handleBlur() {
      dispatch(actionCreator.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)