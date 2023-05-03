import React, { Component } from 'react'
import{Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink/MyNavLink'
import Detail from './Detail'
import More from './More'
import './index.css'
export default class About extends Component {
  render() {
    return (
       
        <div className="about">
            <h2 className="aboutcontent">about的内容</h2>
            <ul className="about-nav">
                <li className="detail"><MyNavLink to='/about/detail'  >Details</MyNavLink></li>
                <li className="more"><MyNavLink to='/about/more' >More</MyNavLink></li>
            </ul>

              <Switch>
              <Route path='/about/detail' component={Detail} ></Route>
              <Route path='/about/more' component={More} ></Route>
              <Redirect to='/about/detail'/>
              </Switch>
             
            
        </div>
      
    )
  }
}
