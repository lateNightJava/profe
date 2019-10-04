import * as React from 'react';
import { HeaderNav } from '../HeaderNav';
import { Search } from '../Search';
import './Header.scss';

export interface HeaderProps {
  headerProp: string;
}

export class Header extends React.Component<HeaderProps, {}> {

  add(x: number): number {
    return 2 + 3 + x;
  }

  render() {
    return (
      <header
        className="header"
        data-test="headerComponent"
      >
        <div
          className="header-content"
        >
          <div
            className="header-logo"
            data-test="headerLogo"
          >
            Teechuh
          </div>
          <Search />
          <HeaderNav authenticated={false} />
        </div>
      </header>
    );
  }
}
