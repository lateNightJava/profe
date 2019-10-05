import * as React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

interface FooterProps {
  footerProp: string;
}

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <footer
      className="footer"
      data-test="footerComponent"
    >
      <Link
        className="footer-logo"
        data-test="footerLogo"
        to="/"
      >
        Teechuh
      </Link>
      <div
        className="footer-copyright"
      >
        Copyright © 2019 Teechuh, Inc.
      </div>
    </footer>
  );
};

export {
  Footer,
  FooterProps,
};
