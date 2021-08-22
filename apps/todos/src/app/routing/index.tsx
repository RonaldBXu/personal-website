import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AppLayout } from '../layout'
import { GlobalRouterPath } from './constant/globalRoute'

export const AppRouter: React.FC = () => {

  return (
    <Switch>
      <Route
        path={GlobalRouterPath.HOME}
        component={AppLayout}
      />
      <Route
        exact
        path="/"
        render={(): React.ReactNode => <Redirect to={GlobalRouterPath.HOME} />}
      />
    </Switch>
  )
}
