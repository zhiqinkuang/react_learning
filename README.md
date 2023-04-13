# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`


```
-src
--index.js 入口文件
--App.js App组件
--reportWebVital记录页面性能
--APP.test.js 用于app组件的测试
--setipTest.js组件单元测试
--package.json 的说明文件
--package-lock 记录版本保持包的一致性
```

### 重新建立自己的项目

 1.删除原来的public 和src

2.创建自己的src 和 public  public 里面的关键  icon  index.html 有关root 节点  src 里面的关键是 是App.js 以及index.js

3.index.js 包的引入 18版本以后写法如下

```JS
//引入reat 核心库
import React from 'react'
//引入ReactDom
import ReactDOM from 'react-dom/client';
// 引入App组件
import App from './App'
// 渲染App到页面

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

4.App.js 组件的写法

```js
import React from 'react'

export default  class App extends React.Component{
    render(){
        return(
            <div>
                hello word!
            </div>
        )
    }
}
```

5.建立一个component 文件夹，在文件建立建立子两组件 ,首字母大写

Welcome 组件和 Hello 组件

```jsx
import React,{Component} from 'react'

export default class Welcome extends Component{
    render(){
        return(
            <h2>weclome</h2>
        )
    }
}
```

```jsx
import React,{Component} from 'react'

export default class Hello extends Component{
    render(){
        return(
            <h2>hello</h2>
        )
    }
}
```

在app 里面使用模块化样式（可以将组件的样式scoped）局部颜色不会污染其他组件

```
-hello   文件夹
--index.jsx 组件
--index.module.css 模块化的样式
```

使用的时候如下，写成下面的形式

```jsx
import React,{Component} from 'react'
import hello from './index.module.css'
export default class Hello extends Component{
    render(){
        return(
            <h2 className={hello.title}>hello</h2>
        )
    }
}
```

多个案例学习的时候修改src名称 重新创建一个src文件夹

### 快捷生成组件

快速实现组件代码的生成：

1.在插件里面 找到 ES7 React/Redux/GraphQL/React-Native snippets 进行安装

2.直接在 jsx 文件里可以快捷创建基本的代码块

3.类组件rcc  函数组件rfc  其他快捷代码导入可见插件说明

## 实战案例Todolist

todolist案例的组件划分为Footer ,Header,Item,List

静态组件如下所示：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        /* 去除列表样式 */
        ul,ol {
            list-style: none;
        }

        /* a 标签去除下划线 */
        a {
            text-decoration: none;
        }

        /* 设置页面默认字体 */
        body {
            background-color: #ccc;
            font-family: Arial, sans-serif;
        }

        .todo-container{
         background-color: #fff;
         width: 600px;
         padding: 5px;
         margin: 100px auto;
         border-radius: 2px solid #ddd;
         border-radius: 5px;
        }
        .todo-wrap{
          background-color: #ddd;
          padding: 15px;
          border-radius: 2px solid #f40;
          border-radius: 5px;
        }
        /* 头部的样式 */
        .todo-header{
            text-align: center;
        }
        .todo-header input{
            margin:0 auto;
            border-radius: 3px;
            border:1px solid #ddd;
            width:550px;
            height: 20px;
            padding: 5px;
            font-size: 14px;
            margin: 0 auto;
        }
        /* list和item */
        .btn{
            
            clear: both;
            float: right;
            color:#fff;
            background-color: #da4f49;
            border: 1px solid #bd362f;
            border-radius: 3px;
        }
        .btn:hover{
            background-color: #bd362f;
        }
        .todo-list{
         width: 550px;
         padding: 5px;
         margin: 0 auto;
         background: #fff;
         border: 2px solid #fff;
        }
        .todo-item{
            padding: 0 2px;
            width: 550px;
            height:20px;
            font-size: 15px;
            background-color: #fff;
            border-radius: 2px;
            border:1px solid #ddd;
            margin: 2px auto;
        }
        /* Footer的样式 */
        .todo-footer{
          width: 560px;
          margin-top:10px;
          height: 25px;
          background-color: #fff;
          padding-left: 10px;
          border: 1px solid #fff;
          border-radius: 5px;
        }
        
    </style>
</head>

<body>
    <div class="todo-container">
        <h2>欢迎使用todolist</h2>
        <div class="todo-wrap">
            <div class="todo-header">
                <input type="text" placeholder="请你输入任务名称，按回车确定">
            </div>
            <ul class="todo-list">
                <li class="todo-item" style="overflow: hidden;">
                    <label>
                        <input type="checkbox" />
                        <span>xxxx</span>
                        <button class="btn">删除</button>
                    </label>
                </li>
                <li class="todo-item" style="overflow: hidden;">
                    <label>
                        <input type="checkbox" />
                        <span>xxxx</span>
                        <button class="btn">删除</button>
                    </label>
                </li>
            </ul>
            <div class="todo-footer">
                <input type="checkbox">
                <span>已完成2项/总共5项</span>
                <button class="btn">清空所选</button>
            </div>
        </div>
    </div>
</body>

</html>
```

实现基本的功能包括，回车输入，悬浮切换样式，勾选按键的使用改变原来的属性值

这里先复习一下父子组件的通讯  子组件传递数据给父组件使用 props 传递函数给子组件，父组件传递数据给子组件使用props就行

### 回车输入功能的实现

在拆分的Header 组件里面添加数据

1.读取输入的数据添加到数组todos里面 这里需要一个 先组装一个对象，传递个父组件 App.jsx

2.清空一下输入框

3.定义一个回调函数实现 这里使用onKeyUp事件来触发回调

Header.jsx

```jsx
import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import  './index.css'
export default class Header extends Component {
  
  handleKeyUp=(event)=>{
    const {keyCode,target}=event;
    // 判断是否按下空格
   if(keyCode!==13) return;
   //  输入不能为空
   if(target.value.trim()===''){
      alert('输入不能为空');
      return;
   }
   // 使用nanoid 进行唯一标记id
   const newObj={id:nanoid(),name:target.value,done:false};
   target.value='';
   this.props.getInput(newObj);
  }
  render() {
    return (
      <div className="todo-header">
      <input type="text" placeholder="请你输入任务名称，按回车确定" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}
```

### 任务的组件功能实现

List.jsx 组件 主要用于传递todo数据 和一些 item 用到的函数

```jsx
import React, { Component } from 'react'
import Item from '../Item/index'

import  './index.css'

export default class List extends Component {

   
  render() {
    const todos=this.props.todos;
    const handleupdate=this.props.handleupdate;
    const handleDelete =this.props.handleDelete;
    return (
      <ul className="todo-list" style={{display:todos.length>0?'block':'none'}}>
      {
        todos.map((todo)=>{
          return <Item  key={todo.id} {...todo} handleupdate={handleupdate} handleDelete={handleDelete} />
        })
      }
  </ul>
    )
  }
}
```

item.jsx  用来实现 删除，勾选等功能 

```jsx
import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  // constructor(props){
  //   super(props);
  //   this.
  // }
  state={
    mouse:false
  }
  handleClear(id){
    return()=>{
      if(window.confirm("你确定要删除吗？")){
        this.props.handleDelete(id);
       }    
    }
       
  }
  // 勾选按键
  handleChecked(id){
    return(event)=>{
      const target=event.target;
      // 获取按键的状态和id便于修改
      this.props.handleupdate(id,target.checked);
    }
  }
  // 鼠标移入移出，通过flag来改变样式
  handleEnderAndLeave(flag){
    return()=>{
      this.setState({
        mouse:flag
    })
    }
   
  }
  render() {
    const{id,name,done}=this.props;
    const {mouse}=this.state;
    return (
      <li className="todo-item" onMouseEnter={this.handleEnderAndLeave(true)} 
      onMouseLeave={this.handleEnderAndLeave(false)} 
      style={{backgroundColor:mouse?'#ddd':'#fff'}}>
      <label >
          <input type="checkbox" checked={done} onChange={this.handleChecked(id)}/>
          <span> {name}</span>
          <button className="btn" style={{display:mouse?'block':'none'}} onClick={this.handleClear(id)}>删除</button>
      </label>
     </li>
    )
  }
}
```

### Footer 组件的勾选与全选

Footer.jsx

```jsx
import React, { Component } from 'react'
import  './index.css'
export default class Footer extends Component {
  handleClearAll=()=>{
    const todos= this.props.todos;
    if(todos.length!==0){
      this.props.handleDeleteAll();
    }
    else{
      alert('已经没有任务了')
    }
    
  }
  
  handleAllChange=(event)=>{
      this.props.handleAllCheck(event.target.checked);
  }
  render() {
    const todos= this.props.todos;
    // 统计所有的项目数量
    const total=todos.length;
    // 统计勾选的项目
    const completed=todos.reduce((pre,todo)=> {return pre+(todo.done===true?1:0)},0);
    return (
      <div className="todo-footer">
                <input type="checkbox" checked={(completed===total&&total!==0)?true:false} onChange={this.handleAllChange}/>
                <span>&nbsp;&nbsp;已完成{completed}项/总共{total}项</span>
                <button className='btn btnclearall' onClick={this.handleClearAll}>清空已完成任务</button>
      </div>
    )
  }
}
```