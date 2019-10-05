import * as React from 'react';

interface FormProps {
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = props => {
  const formProps: FormProps =
    props.onSubmit
      ? { onSubmit: props.onSubmit }
      : {};

  return (
    <form
      data-test="formComponent"
      { ...props }
    >
      { props.children }
    </form>
  );
};

export {
  Form,
  FormProps,
};
