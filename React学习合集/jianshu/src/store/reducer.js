/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-29 17:39:29
 * @LastEditTime: 2020-03-29 17:52:15
 */

const defaultState = {
  focused: false
}

const reducer = (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    return {
      focused: true
    }
  }
  if (action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state;
}

export default reducer