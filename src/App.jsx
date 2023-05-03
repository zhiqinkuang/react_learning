import React from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default  class App extends React.Component{
    state={items:[],isFistLoading:true}
    handleUpdata=(data)=>{
      this.setState({
        items:data,
        isFistLoading:false
      })
    }
    render(){
        return(
            <div className="container">
            <Search handleUpdata={this.handleUpdata}/>
             {this.state.isFistLoading?<div className='welcome'><h2 >等待搜索。。。</h2></div>:<List items={this.state.items}/>}  
        </div>
        )
    }
}