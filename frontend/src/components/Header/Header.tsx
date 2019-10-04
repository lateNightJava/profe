import * as React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav } from '../HeaderNav';
import { Search } from '../Search';
import './Header.scss';

interface HeaderProps {
  headerProp: string;
}

class Header extends React.Component<HeaderProps, {}> {

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
          <Link
            className="header-logo"
            data-test="headerLogo"
            to="/"
          >
            Teechuh
          </Link>
          <Search />
          <HeaderNav authenticated={false} />
        </div>
      </header>
    );
  }
}

export {
  Header,
  HeaderProps,
};
