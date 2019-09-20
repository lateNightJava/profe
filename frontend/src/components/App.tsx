import * as React from 'react';
import './app.scss';

interface HelloProps {
  compiler: string;
  framework: string;
}

export class App extends React.Component<HelloProps, {}> {
  render() {
    return (
      <>
        <Header></Header>
        <AppRouter></AppRouter>
        <Footer></Footer>
      </>
    );
  }
}
