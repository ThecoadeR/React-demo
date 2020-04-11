/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-04-11 14:21:41
 * @LastEditTime: 2020-04-11 15:06:20
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
  width: 240px;
  float: right;
`

export const TopicWrapper = styled.div`
  margin-left: -18px;
  padding: 20px 0 10px 0;
  overflow: hidden
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