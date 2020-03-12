<!--
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-11 14:02:17
 * @LastEditTime: 2020-03-12 22:12:22
 -->
## React笔记

* #### immutable => state是不允许被改变的 如果必须修改 可以浅拷贝一份出来 然后再修改
* #### 父子组件传值 父组建渲染子组件的时候 通过属性的方式 ```item={item}```传递给子组件 子组件通过 this.props接收父组件传递过来的内容
* #### 子组件想要调用父组件的方法的话 其实也是和上面一样 父组件需要通过属性的形式 把方法传递给子组件 同时 该方法的this需要绑定在父组件上
* #### propTypes 可以约束父子组件传递属性的类型 defaultProps - 默认值
* #### 当组件的props或者state改变以后 render就会重新执行
* #### 当父组件的render被重新执行时 子组件也会被重新执行
* #### React生命周期
  * ##### componentWillMount 组件即将被挂载到页面的时刻自动执行
  * ##### render 页面挂载
  * ##### componentDidMounte 页面完成挂载以后
  * ##### componentWillReceiveProps 组件有接收到props的时候 并且子组件存在于父组件中 才会执行
  * ##### shouldComponentUpdate 组件页面被更新之前会被自动执行 返回值是个boolean true更新 false不更新
  * ##### componentWillUpdate 组件被更新之前会自动执行 在shouldComponentUpdate返回值为true才会执行 返回false不会执行
  * ##### componentDidUpdate 组件更新完成之后会自动执行
  * ##### componentWillUnmount 组件即将被销毁的时候会自动执行
  