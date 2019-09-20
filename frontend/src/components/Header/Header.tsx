import * as React from 'react';
import * as headerLogo from './headerLogo.png';

interface HeaderProps {

}

export class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <header>
        <div className="header-logo">
          <img src={headerLogo} />
        </div>
        <nav className="header-nav">
        </nav>
      </header>
    );
  }
}
