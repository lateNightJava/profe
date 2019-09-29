import * as React from 'react';

interface FooterProps {
  footerProp: string;
}

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <footer data-test="footerComponent">
      This is the Footer {props.footerProp}
    </footer>
  );
};

export {
  Footer,
  FooterProps,
};
