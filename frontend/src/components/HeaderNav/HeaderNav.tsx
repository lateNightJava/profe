import * as React from 'react';
import { AuthNav } from './AuthNav';
import { UserNav } from './UserNav';
import './HeaderNav.scss';

interface HeaderNavProps {
  authenticated: boolean;
}

const HeaderNav: React.FC<HeaderNavProps> = (props) => (
  <nav
    className="header-nav"
    data-test="headerNavComponent"
  >
    {
      !props.authenticated
        ? <AuthNav />
        : <UserNav />
    }
  </nav>
);

export {
  HeaderNav,
  HeaderNavProps,
};
