/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 14:17:03
 * @LastEditTime: 2020-04-11 17:52:30
 */
import React, { Component } from 'react'
import List from './component/List'
import Recommend from './component/Recommend'
import Topic from './component/Topic'
import Writer from './component/Writer'
import { connect } from 'react-redux'
import {
  HomeWrapper,
  HomeLeftWrapper,
  HomeRightWrapper
} from './style'
import * as actionCreator from './store/actionCreator'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeftWrapper>
          <img className='img-wrapper' src='//upload-images.jianshu.io/upload_images/6171276-3304c2681c7b7995.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp' alt=''></img>
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
  componentDidMount() {
   this.props.getHomeData()
  }
}

const mapDispatch = (dispatch) => ({
  getHomeData() {
    const action = actionCreator.getHomeInfo()
    dispatch(action)
  } 
})

export default connect(null, mapDispatch)(Home)