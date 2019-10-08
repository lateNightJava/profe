import * as React from 'react';

interface InputProps {
  checked?: boolean;
  className: string;
  name?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  type: string;
  value: string;
}

const Input: React.FC<InputProps> = props => (
  <input
    className={props.className}
    data-test="inputComponent"
    onChange={props.onChange}
    placeholder={props.placeholder || null}
    type={props.type}
    value={props.value}
    name={props.name || null}
  />
);

export {
  Input,
  InputProps,
};
