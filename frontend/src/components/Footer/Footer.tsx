import * as React from 'react';

interface FooterProps {
  footerProp: string;
}

export class Footer extends React.Component<FooterProps, {}> {
  render() {
    return <div>This is the Footer {this.props.footerProp}</div>;
  }
}
