<!--
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-11 14:02:17
 * @LastEditTime: 2020-03-15 15:02:44
 -->
## React笔记

* #### immutable => state是不允许被改变的 如果必须修改 可以浅拷贝一份出来 然后再修改
* #### 父子组件传值 父组建渲染子组件的时候 通过属性的方式 ```item={item}```传递给子组件 子组件通过 this.props接收父组件传递过来的内容
* #### 子组件想要调用父组件的方法的话 其实也是和上面一样 父组件需要通过属性的形式 把方法传递给子组件 同时 该方法的this需要绑定在父组件上
* #### propTypes 可以约束父子组件传递属性的类型 defaultProps - 默认值
* #### 当组件的props或者state改变以后 render就会重新执行
* #### 当父组件的render被重新执行时 子组件也会被重新执行
* #### React生命周期
  * componentWillMount 组件即将被挂载到页面的时刻自动执行
  * render 页面挂载
  * componentDidMounte 页面完成挂载以后
  * componentWillReceiveProps 组件有接收到props的时候 并且子组件存在于父组件中 才会执行
  * shouldComponentUpdate 组件页面被更新之前会被自动执行 返回值是个boolean true更新 false不更新
  * componentWillUpdate 组件被更新之前会自动执行 在shouldComponentUpdate返回值为true才会执行 返回false不会执行
  * componentDidUpdate 组件更新完成之后会自动执行
  * componentWillUnmount 组件即将被销毁的时候会自动执行

* #### Redux
  * store 管理公用数据的地方 创建store的时候 需要把reducer传递给createStore ```createStore(reducer)```
  * Action Creators 获取数据
  * Reducers 首先 返回的必须是一个函数 这个函数有两个参数 state和action state是定义的数据(上一次操作以后的数据) action是组件内定义的行为 通过dispatch派发给给reducers 需要注意的是reducers可以接收state但是绝不可以修改state 所以需要深拷贝以后修改state 修改以后的newState会返回给store
  * Redux工作流程: React Components 通过ActionCreators获取数据 同时Actions Creators通过dispatch派发到store store去Reducers查找修改的数据 Reducers同时返回修改以后的数据
  * store必须是唯一的
  * 只有store可以修改数据 reducers其实只是存放修改方法 并把newState返回给store 由store自己替换
  * reducer必须是个纯函数 指的是给固定的输入 就一定会有固定的输出 而且不会有副作用 参考reducers.js
  
* #### UI组件 -> 渲染 容器组件 -> 逻辑

* #### 无状态组件 -> 仅仅返回一个函数 性能更好 参考TodoListUI.js

* #### 使用Redux-thunk (参考actionCreators.js)
  * 1. npm install
  * 2. 在actionCreators.js中创建新的action 这个action是一个函数 同时可以接收dispatch参数
  * 3. 同时需要在定义好的action中 再根据对应业务逻辑 定义一个action 
  * 4. 在需要执行异步逻辑的组件中 定义这个action 并且转发给store store会自动帮你执行定义好的action