import * as React from 'react';
import * as headerLogo from './headerLogo.png';

interface HeaderProps {
  headerProp: string;
}

export class Header extends React.Component<HeaderProps, {}> {
  public render(): JSX.Element {
    return (
      <header>
        <div className="header-logo">
          <img src={headerLogo} />
        </div>
        <nav className="header-nav">
          { this.props.headerProp }
        </nav>
      </header>
    );
  }
}
