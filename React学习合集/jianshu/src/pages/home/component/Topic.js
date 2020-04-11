/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 14:30:29
 * @LastEditTime: 2020-04-11 15:24:35
 */
import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item) => {
            return (
              <TopicItem key={item.id}>
                <img className="item-img" src={item.get('imgUrl')}></img>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
}
const masState = (state) => {
  return {
    topicList: state.home.get('topicList')
  }
}

export default connect(masState, null)(Topic)