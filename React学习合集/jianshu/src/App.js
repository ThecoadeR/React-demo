/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-19 22:00:00
 * @LastEditTime: 2020-04-11 14:21:25
 */
import React, { Fragment } from 'react';
import { GlobalStyle } from './style'
import { GlobalIconFont } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header/index'
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import store from './store/index'
function App() {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <GlobalIconFont></GlobalIconFont>
      <Provider store = { store }>
        <Header/>
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail"  exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  )
}

export default App;
