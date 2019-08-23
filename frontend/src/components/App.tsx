// import React, { Componenet } from 'react';
//
// class App extends Componenet {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return <main>Sup Guey</main>;
//   }
// }
//
// export default App;

import * as React from 'react';
import './app.scss';

export interface HelloProps { compiler: string; framework: string; }

export class App extends React.Component<HelloProps, {}> {
  render() {
    return (
      <main>
        <div>Sup Guey,</div>
        <div>{this.props.compiler},</div>
        <span>{this.props.framework}!</span>
      </main>
    );
  }
}
