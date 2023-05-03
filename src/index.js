//引入reat 核心库
import React from 'react'
//引入ReactDom
import ReactDOM from 'react-dom/client';
// 引入App组件
import App from './App'
// 渲染App到页面
// 添加路由
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
);