import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Counter from './counter'

const Home = () => (
  <div>
    Home
    <Counter />
  </div>
)

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
  </Router>
)

export default routes
