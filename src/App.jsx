import React, { Suspense, lazy } from 'react'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink/MyNavLink'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
const About=lazy(()=>import ('./pages/About'))
// import About from './pages/About'
const Search=lazy(()=>import ('./pages/Search'))
export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header></Header>
                <div className="mainbox">
                    <div className="slidebox">
                        <MyNavLink to="/about">About</MyNavLink>
                        <MyNavLink to="/search">Search</MyNavLink>
                    </div>
                    <div className="content">
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <Switch>
                                <Route path='/search' component={Search}></Route>
                                <Route path='/about' component={About}></Route>
                                <Redirect to='/search'></Redirect>
                            </Switch>
                        </Suspense>

                    </div>
                </div>


            </div>
        )
    }
}