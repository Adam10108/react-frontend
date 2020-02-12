import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import Home from '../../containers/homePage'
import Login from '../../containers/loginPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes
