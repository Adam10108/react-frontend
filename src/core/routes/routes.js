import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import GuardRoute from './guard'
import Home from '../../containers/homePage'
import Login from '../../containers/loginPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <GuardRoute path="/home" component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes
