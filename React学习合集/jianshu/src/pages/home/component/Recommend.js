/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 14:30:46
 * @LastEditTime: 2020-04-11 17:42:29
 */
import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'
class Recommend extends Component {
  render() {
    const { recommendList } = this.props
    return (
      <RecommendWrapper>
        {
          recommendList.map((item) => {
            return (
              <RecommendItem key={item.get('id')}>
                <img className='recommend-img' src={item.get('imgUrl')} alt='' ></img>
              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    recommendList: state.home.get('recommendList')
  }
}
export default connect(mapState, null)(Recommend)