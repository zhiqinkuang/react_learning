import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import  './index.css'

export default class Header extends Component {
  
  // 添加propTypes的限制
  
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
