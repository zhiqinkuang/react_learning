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
