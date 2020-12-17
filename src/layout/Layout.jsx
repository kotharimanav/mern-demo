import React from 'react';
import { Route, Switch } from 'react-router-dom';
import layoutRoutes from '../routes/layoutRoutes';
import ProtectedRoutes from '../routes/ProtectedRoutes';
import { useSelector } from 'react-redux';

const Layout = () => {
  const auth = useSelector(state => state.auth);

  return (
    <div>
      <Switch>
        <ProtectedRoutes {...auth}>
          {layoutRoutes.map((route, key) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={key}
              />
            )
          })}
        </ProtectedRoutes>
      </Switch>
    </div>
  );
};

export default Layout;
