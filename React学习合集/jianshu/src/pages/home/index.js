/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 14:17:03
 * @LastEditTime: 2020-04-11 14:42:10
 */
import React, { Component } from 'react'
import List from './component/List'
import Recommend from './component/Recommend'
import Topic from './component/Topic'
import Writer from './component/Writer'
import {
  HomeWrapper,
  HomeLeftWrapper,
  HomeRightWrapper
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeftWrapper>
          <img className='img-wrapper' src=""></img>
          <Topic></Topic>
          <List></List>
        </HomeLeftWrapper>
        <HomeRightWrapper>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRightWrapper>
      </HomeWrapper>
    )
  }
}

export default Home