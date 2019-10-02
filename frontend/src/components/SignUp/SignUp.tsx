import * as React from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Input';
import './SignUp.scss';

interface SignUpState {
  email: string;
  password: string;
}

class SignUp extends React.Component<{}, SignUpState> {
  state: SignUpState = {
    email: '',
    password: '',
  };

  handleInput = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [field]: e.currentTarget.value });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div
        className="signup-page"
        data-test="signUpComponent"
      >
        <Form
          onSubmit={this.handleSubmit}
        >
          <Input
            className="signup-input"
            onChange={this.handleInput('email')}
            placeholder="Please enter email"
            value={this.state.email}
            type="text"
          />
          <Input
            className="signup-input"
            onChange={this.handleInput('password')}
            placeholder="Please enter password"
            value={this.state.password}
            type="password"
          />
          <button
            className="submit-btn"
            data-test="submitButton"
            type="submit"
          >
            SignUp
          </button>
        </Form>
      </div>
    );
  }
}

export {
  SignUp,
  SignUpState,
};
