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
