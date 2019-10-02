import * as React from 'react';
import { AppRouter } from './AppRouter';
import { Header } from './Header';
import { Footer } from './Footer';
import './App.scss';

interface AppProps {
  compiler: string;
  framework: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div
        className="app"
        data-test="appComponent"
      >
        <Header headerProp={this.props.compiler} />
        <AppRouter />
        <Footer footerProp={this.props.framework} />
      </div>
    );
  }
}

export {
  App,
  AppProps,
};
