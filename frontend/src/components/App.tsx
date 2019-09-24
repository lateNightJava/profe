import * as React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import './app.scss';

interface HelloProps {
  compiler: string;
  framework: string;
}

export class App extends React.Component<HelloProps, {}> {
  public render(): JSX.Element {
    return (
      <>
        <Header headerProp={this.props.compiler}></Header>
        <Footer footerProp={this.props.framework}></Footer>
      </>
    );
  }
}

        // <AppRouter></AppRouter>
