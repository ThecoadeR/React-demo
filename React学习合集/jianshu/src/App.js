/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-19 22:00:00
 * @LastEditTime: 2020-03-29 17:42:32
 */
import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
import { GlobalIconFont } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import Header from './common/header/index'
import store from './store/index'
function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <GlobalIconFont></GlobalIconFont>
      <Provider store = { store }>
        <Header/>
      </Provider>
    </Fragment>
  )
}

export default App;
