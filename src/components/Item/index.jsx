import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  render() {
    return (
      <div className="item">
      <img src={this.props.avatar} alt=""/>
      <a className="title" href={this.props.home}>{this.props.name}</a>
      </div>
    )
  }
}
