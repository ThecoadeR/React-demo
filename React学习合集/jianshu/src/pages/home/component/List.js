/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 14:30:36
 * @LastEditTime: 2020-04-12 14:12:51
 */
import React, { Component, Fragment } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actionCreator'
class List extends Component {
  render() {
    const { articleList, getMoreList } = this.props
    return (
      <Fragment>
        {
          articleList.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className='list-img' src={item.get('imgUrl')} alt=''></img>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={getMoreList}>阅读更多</LoadMore>
      </Fragment>
    )
  }
}
const mapState = (state) => {
  return {
    articleList: state.home.get('articleList')
  }
}
const mapDispatch = (dispatch) => ({
  getMoreList() {
    dispatch(actionCreator.getMoreList())
  }
})
export default connect(mapState, mapDispatch)(List)