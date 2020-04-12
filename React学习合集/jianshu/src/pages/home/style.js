/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 14:21:41
 * @LastEditTime: 2020-04-12 14:08:43
 */
import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  min-height: 300px;
  background: red
  overflow: hidden;
`

export const HomeLeftWrapper = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .img-wrapper {
    width: 625px;
    height: 270px;
  }
`

export const HomeRightWrapper = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  margin-left: -18px;
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
`

export const TopicItem = styled.div`
  float: left;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .item-img {
    margin-right: 10px;
    width: 32px;
    height: 32px;
    display: block;
    float: left
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  overflow: hidden;
  .list-img {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 10px;
  }
  :last-child {
    margin-bottom: 100px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999
  }
`
export const LoadMore = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width:280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  width: 50px;
  .recommend-img {
    width: 280px;
    height: 50px;
  }
`

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`