/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-13 22:34:26
 * @LastEditTime: 2020-03-13 23:52:56
 */

/**
 * state => 存放的就是所有信息 或者说是store存储的数据
 * action => 通过action.dispatch传递过来的内容 包含type 和 value
 */
const defaultState = {
  inputValue: '',
  list: []
}

// reducer可以接收state 但是绝不可以修改state 所以需要一个深拷贝
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState  // store会接收到这个newState 并且会把原有数据替换成该数据
  }

  if (action.type === 'list_push_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value)
    newState.inputValue = ''
    return newState
  }
  
  if (action.type === 'delete_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  return state
}