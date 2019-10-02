import * as React from 'react';
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
    console.log(this.state);
  }

  render() {
    return (
      <div
        className="login-page"
        data-test="loginComponent"
      >
        <form
          onSubmit={this.handleSubmit}
          data-test="loginForm"
        >
          <Input
            className="loginInput"
            dataTestAttr="emailInputComponent"
            onChange={this.handleInput('email')}
            placeholder="Please enter email"
            value={this.state.email}
            type="text"
          />
          <Input
            className="loginInput"
            dataTestAttr="passwordInputComponent"
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
        </form>
      </div>
    );
  }
}

export {
  Login,
  LoginState,
};
