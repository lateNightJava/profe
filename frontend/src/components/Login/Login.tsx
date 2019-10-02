import * as React from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Input';
import './Login.scss';

interface LoginState {
  email: string;
  password: string;
}

class Login extends React.Component<{}, LoginState> {
  state: LoginState = {
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
        className="login-page"
        data-test="loginComponent"
      >
        <Form
          onSubmit={this.handleSubmit}
        >
          <Input
            className="login-input"
            onChange={this.handleInput('email')}
            placeholder="Please enter email"
            value={this.state.email}
            type="text"
          />
          <Input
            className="login-input"
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
            Login
          </button>
        </Form>
      </div>
    );
  }
}

export {
  Login,
  LoginState,
};
