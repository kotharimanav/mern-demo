import React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { history, store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import indexRoutes from './routes';

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/dashboard' />} />
            {indexRoutes.map((route, key) => {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={key}
                />
              );
            })}
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
