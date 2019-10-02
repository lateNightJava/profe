import * as React from 'react';

interface InputProps {
  className: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  placeholder: string;
  type: string;
  value: string;
}

const Input: React.FC<InputProps> = props => (
  <input
    className={props.className}
    data-test="inputComponent"
    onChange={props.onChange}
    placeholder={props.placeholder}
    type={props.type}
    value={props.value}
  />
);

export {
  Input,
  InputProps,
};
