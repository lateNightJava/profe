import * as React from 'react';

export interface HeaderProps {
  headerProp: string;
}

export class Header extends React.Component<HeaderProps, {}> {

  public add(): number {
    return 2 + 3;
  }

  public render(): JSX.Element {
    return (
      <header>
        <nav className="header-nav">
          { this.props.headerProp }
        </nav>
      </header>
    );
  }
}
