import * as React from 'react';

export interface FooterProps {
  footerProp: string;
}

export const Footer = (props: FooterProps): JSX.Element => {
  return (
    <footer data-test="footerComponent">
      This is the Footer {props.footerProp}
    </footer>
  );
}
