import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AppLayout } from '../layout';

export const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={'/ronald'} component={AppLayout} />
      <Route
        path="/"
        render={(): React.ReactNode => <Redirect to={'/ronald'} />}
      />
    </Switch>
  );
};
