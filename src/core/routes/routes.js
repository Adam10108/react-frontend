import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import React from 'react'
import Login from '../../containers/loginpage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  )
}

export default Routes
