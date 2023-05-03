import React, { Component } from 'react'
import qs from 'querystring-es3'
export default class Description extends Component {
  render() {
    // param传递的方式
    // const{id,title}=this.props.match.params
    // search 传递方法
    const{search}=this.props.location
    const {id,title}=qs.parse(search.slice(1))  
    // state 传递方法
    // const {id,title}= this.props.location.state
    
    return (
      <div>
        <label>id:{id}</label>
        <label>title:{title}</label>
      </div>
    )
  }
}
