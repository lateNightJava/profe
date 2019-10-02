import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../Login';
import { SignUp } from '../SignUp';
import './AppRouter.scss';

class AppRouter extends React.Component<{}, {}> {
  render() {
    return (
      <main
        data-test="appRouterComponent"
      >
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </main>
    );
  }
}

export {
  AppRouter,
};
