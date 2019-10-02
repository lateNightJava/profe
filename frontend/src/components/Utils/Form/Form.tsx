import * as React from 'react';

interface FormProps {
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
      { ...formProps }
    >
      { props.children }
    </form>
  );
};

export {
  Form,
  FormProps,
};
