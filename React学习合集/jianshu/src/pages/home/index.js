/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 14:17:03
 * @LastEditTime: 2020-04-12 15:02:12
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
  HomeRightWrapper,
  BackTop
} from './style'
import * as actionCreator from './store/actionCreator'

class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }
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
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount() {
   this.props.getHomeData()
   this.watchingScroll()
  }
  watchingScroll() {
    window.addEventListener('scroll', this.props.changeScroll)
  }
}

const mapState = (state) => ({
  showScroll: state.home.get('showScroll')
})

const mapDispatch = (dispatch) => ({
  getHomeData() {
    const action = actionCreator.getHomeInfo()
    dispatch(action)
  },
  changeScroll() {
    if (document.documentElement.scrollTop > 400) {
      const action = actionCreator.showScroll()
      dispatch(action)
    } else {
      const action = actionCreator.hiddenScroll()
      dispatch(action)
    }
    console.log(document.documentElement.scrollTop)
  }
})

export default connect(mapState, mapDispatch)(Home)