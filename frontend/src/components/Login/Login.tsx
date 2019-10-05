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
        <h1
          className="login-title"
        >
          Login for Teechuh
        </h1>
        <Form
          className="login-form"
          onSubmit={this.handleSubmit}
        >
          <Input
            className="login-input"
            onChange={this.handleInput('email')}
            placeholder="Email"
            value={this.state.email}
            type="text"
          />
          <Input
            className="login-input"
            onChange={this.handleInput('password')}
            placeholder="Password"
            value={this.state.password}
            type="password"
          />
          <button
            className="login-submit-btn"
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
