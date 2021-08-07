import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROUTE_NAMES, routes } from '../../utils/routes';
import { MainTemplate } from '../templates/Main';

export const AppRouter: React.FC = () => {
  return (
    <MainTemplate>
      <Switch>
        {routes.map(({ component, path }) => (
          <Route key={path} path={path} component={component} exact />
        ))}
        <Redirect to={ROUTE_NAMES.HOME} />
      </Switch>
    </MainTemplate>
  );
};
