/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 20:01:58
 * @LastEditTime: 2020-04-11 15:11:08
 */
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 2,
      title: '时事政事',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 3,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }
  ]
})

const reducer = (state = defaultState, action) => {
  return state;
}

export default reducer