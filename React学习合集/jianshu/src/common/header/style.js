/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 14:37:06
 * @LastEditTime: 2020-03-30 22:21:58
 */
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #F0F0F0
`

export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 150px;
  display: inline-block;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
  }
  
  &.active {
    color: #ea6f5a
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #999;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  padding: 0 20px;
  width: 240px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2)
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`
export  const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-left: 20px;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  width: 160px;
  height: 38px;
  border: none;
  border-radius: 19px;
  outline: none;
  font-size: 14px;
  background-color: #eee;
  color: #666;
  box-sizing: border-box;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 150px;
  height: 58px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 15px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.register {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`