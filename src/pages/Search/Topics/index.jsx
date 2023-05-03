import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Description from './Description'
export default class Topics extends Component {
    state={
      items:[{id:1,title:'topic1'},{id:2,title:'topic2'},{id:3,title:'topic3'}]
    }
    pushstate=(id,title)=>{
        this.props.history.push('/search/topics/description',{id:id,title:title})
    }
    replacestate=(id,title)=>{
      this.props.history.replace('/search/topics/description',{id:id,title:title})
    }
    pushparams=(id,title)=>{
      this.props.history.push(`/search/topics/description/${id}/${title}`)
    }
    replaceparams=(id,title)=>{
      this.props.history.replace(`/search/topics/description/${id}/${title}`)
    }
    pushsearch=(id,title)=>{
      this.props.history.push(`/search/topics/description/?id=${id}&title=${title}`)
    }
    replacesearch=(id,title)=>{
      this.props.history.replace(`/search/topics/description/?id=${id}&title=${title}`)
    }
  render() {
    const {items}=this.state
    return (
         <div>
         <ul className="topics-list">
           {
            items.map((item)=>{
              return (
                <li className="topics-item" key={item.id}>
                  {/* params的写法 */}
                  {/* <Link to={`/search/topics/description/${item.id}/${item.title}`}>{item.title}</Link> */}
                  {/* search的写法 */}
                   {/* <Link to={`/search/topics/description/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                   {/* state 的写法 */}
                  <Link to={{ pathname:'/search/topics/description',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                  <button onClick={()=>this.pushsearch(item.id,item.title)}>push 方法</button>
                  <button onClick={()=>this.replacesearch(item.id,item.title)}>replace方法</button>
                  </li>
              )
            })
           }
         </ul>
         <hr/>
         {/* params 的写法 */}
          {/* <Route path="/search/topics/description/:id/:title" component={Description}></Route> */}
          {/* search 和state 的写法 */}
          <Route path='/search/topics/description' component={Description}></Route>
          </div>
    )
  }
}
