import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppHome } from '../home';
import { AppLayout } from '../layout';

export const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path={'/ronald'} component={AppLayout} />
      <Route path="/" component={AppHome} />
    </Switch>
  );
};
