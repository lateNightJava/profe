import * as React from 'react';
import { HeaderNav } from '../HeaderNav';
import { Search } from '../Search';

export interface HeaderProps {
  headerProp: string;
}

export class Header extends React.Component<HeaderProps, {}> {

  public add(x: number): number {
    return 2 + 3 + x;
  }

  public render(): JSX.Element {
    return (
      <header
        className="header"
        data-test="headerComponent"
      >
        <div
          className="header-logo"
          data-test="headerLogo"
        >
          Teechuh
        </div>
        <Search />
        <HeaderNav />
      </header>
    );
  }
}
