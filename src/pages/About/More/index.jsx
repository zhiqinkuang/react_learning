import React, { Component } from 'react'

export default class More extends Component {
    state={
       items:[{id:1,mes:'more1'},{id:2,mes:"more2"}]
    }
  render() {
    const {items}=this.state
    return (
    <ul className="more-list">
        {
       items.map((item)=>{
          return<li className="detail-item" key={item.id}>{item.mes}</li> 
        })
        }
    </ul>
    )
  }
}
