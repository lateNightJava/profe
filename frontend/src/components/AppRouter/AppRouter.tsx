import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { Landing } from '../Landing';
import { Login } from '../Login';
import { SignUp } from '../SignUp';
import './AppRouter.scss';

class AppRouter extends React.Component<{}, {}> {
  render() {
    console.log(this.props);
    return (
      <main
        className="app-router"
        data-test="appRouterComponent"
      >
        <Switch>
          <Route path="/" exact component={Landing} />
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
