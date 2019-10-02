import * as React from 'react';
import './Button.scss';

interface ButtonProps {
  componentName: string;
  onClick(e: React.SyntheticEvent<HTMLButtonElement>): void;
  text: string;
}

const Button: React.FC<ButtonProps> = props => (
  <button
    className="button"
    data-test={props.componentName}
    onClick={props.onClick}
  >
    { props.text }
  </button>
);

export {
  Button,
  ButtonProps,
};
