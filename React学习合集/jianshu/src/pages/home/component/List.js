/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 14:30:36
 * @LastEditTime: 2020-04-11 16:19:13
 */
import React, { Component, Fragment } from 'react'
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux'
class List extends Component {
  render() {
    const { articleList } = this.props
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
      </Fragment>
    )
  }
}
const mapState = (state) => {
  return {
    articleList: state.home.get('articleList')
  }
}
export default connect(mapState, null)(List)