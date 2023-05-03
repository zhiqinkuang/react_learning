import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Message from './Message'
import Topics from './Topics'
import MyNavLink from '../../components/MyNavLink/MyNavLink'
import './index.css'
export default class Search extends Component {
  render() {
    return (
        
        <div className="search">
            <h2 className="searchcontent">search的内容</h2>
            <ul className="search-nav">
                <li className="message"><MyNavLink to='/search/message'>Message</MyNavLink></li>
                <li className="topics"><MyNavLink to='/search/topics'>Topics</MyNavLink></li>
            </ul>
            <Switch>
              <Route path='/search/message' component={Message}></Route>
              <Route path='/search/topics' component={Topics}></Route>
              <Redirect to='/search/message'></Redirect>
            </Switch>
        </div>
       
    )
  }
}
