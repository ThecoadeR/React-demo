/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-19 22:00:00
 * @LastEditTime: 2020-03-29 16:36:10
 */
import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
import Header from './common/header/index'
import { GlobalIconFont } from './statics/iconfont/iconfont'

function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <GlobalIconFont></GlobalIconFont>
      <Header/>
    </Fragment>
  )
}

export default App;
