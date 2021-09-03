import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppLayout } from '../layout';

export const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path={'/ronald'} component={AppLayout} />
      <Route
        exact
        path="/"
        render={(): React.ReactNode => <Redirect to={'/ronald'} />}
      />
    </Switch>
  );
};
