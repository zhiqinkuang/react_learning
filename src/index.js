//引入reat 核心库
import React from 'react'
//引入ReactDom
import ReactDOM from 'react-dom/client';
// 引入App组件
import App from './App'
// 渲染App到页面
import store from './redux/store';
//  应入providing包裹
import {Provider}  from 'react-redux'
// 把store 放在 App 里面监听渲染，store 变化之后进行渲染
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>
);