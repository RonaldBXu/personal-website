import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppLayout } from '../layout';

export const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={'/'} component={AppLayout} />
    </Switch>
  );
};
