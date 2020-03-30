/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 14:33:54
 * @LastEditTime: 2020-03-30 23:04:32
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch, 
  Addition, 
  Button, 
  SearchWrapper, 
  SearchInfo, 
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style.js'
import * as actionCreator  from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
  render() {
    const { focused, handleGetFocus, handleBlur } = this.props
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
              in={ focused }
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className = { focused ? 'focused' : '' }
                onFocus = { handleGetFocus }
                onBlur = { handleBlur }
              />
            </CSSTransition>
            <i className={ this.props.focused ? 'focused iconfont' : 'iconfont' }>&#xe617;</i>
            {/* 获取焦点以后 渲染热门搜索列表 */}
            {this.getHotList()}
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
  
  getHotList = () => {
    const { focused, hotList} = this.props
    if (focused) {
      return (
        <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {
            hotList.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })
          }
        </SearchInfoList>
      </SearchInfo>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    hotList: state.header.get('hotList')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetFocus() {
      dispatch(actionCreator.getHotList())
      dispatch(actionCreator.searchFocus())
    },
    handleBlur() {
      dispatch(actionCreator.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)