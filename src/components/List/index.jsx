import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
  
  render() {
    const items=this.props.items
    return (
      <div className="list-box" >
        {/* 这里进行了一个判断放哪个组件 */}
        { items.length>0?items.map((item)=>{
              return <Item key={item.id} avatar={item.avatar_url} home={item.html_url} name={item.login}/>
          }):<h2>等待加载中...</h2>   
        }
     </div>
    )
  }
}
