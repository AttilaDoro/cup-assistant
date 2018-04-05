import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, NavLink } from "react-router-dom"
import TestOne from './testone/TestOne'
import TestTwo from './testtwo/TestTwo'

class Main extends Component {
  render() {
    return (
      <div>
        <h1>wuuuut</h1>
        <ul className="header">
          <li><NavLink to="/">Test One</NavLink></li>
          <li><NavLink to="/testtwo">Test Two</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={TestOne} />
          <Route path="/testtwo" component={TestTwo} />
        </div>
      </div>
    )
  }
}

export default Main
