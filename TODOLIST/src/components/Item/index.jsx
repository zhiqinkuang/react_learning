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
