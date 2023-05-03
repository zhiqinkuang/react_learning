import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
export default class Search extends Component {
  //按键进行请求
  state={items:[]};
  handleClick=()=>{
    const{keyWordElements:{value}}=this;
    const values=value.trim();
    if( values===''){
      alert('输入不能为空');
      return;
    }
    //发送请求
    axios.get(`https://api.github.com/search/users?q=${values}`).then(
      response=>{this.setState({
        items:response.data.items
      })
       this.props.handleUpdata(response.data.items)
    },
      error=>{console.log('失败了')}
    )
  }
  //回车进行请求
  handleKeyup=(event)=>{
    const{keyCode,target}=event;
    if(keyCode!==13) return;
    const value=target.value.trim();
    if(value===''){
      alert('输入不能为空');
      return;
    }
    // 发起请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      response=>{
        this.setState({
          items:response.data.items
        })
        this.props.handleUpdata(response.data.items)
      },
      error=>{console.log('失败了')}
    )
  }
  render() {
    return (
      <div className="search-box">
      <h2 className="title">欢迎使用github检索</h2>
      <div className="write">
          <input type="text" placeholder="请输入用户名" ref={c=>this.keyWordElements=c}className="search-write" onKeyUp={this.handleKeyup}/>
          <button onClick={this.handleClick}>提交</button>
      </div>
      
      </div>
    )
  }
}
