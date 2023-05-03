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