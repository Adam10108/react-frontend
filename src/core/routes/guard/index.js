// @flow
import { Route, Redirect } from 'react-router-dom'
import React, { memo } from 'react'

import { getToken } from '../../localStores'

type Props = {
  exact: boolean,
  path: string,
  component: any
}

const GuradRoute = (props: Props) => {
  const { exact, path, component: Component } = props
  const isAuth = getToken('token')

  const renderComponent = () => {
    if (isAuth) {
      return <Component {...props} />
    }
    return <Redirect to="/" />
  }

  return <Route exact={exact} path={path} render={() => renderComponent()} />
}

export default memo(GuradRoute)
