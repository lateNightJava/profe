import * as React from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Input';
import './SignUp.scss';

interface SignUpState {
  accountType: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  zipCode: string;
}

class SignUp extends React.Component<{}, SignUpState> {
  state: SignUpState = {
    accountType: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    zipCode: '',
  };

  handleInput = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [field]: e.currentTarget.value });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      zipCode: '',
    });
  }

  render() {
    return (
      <div
        className="signup-page"
        data-test="signUpComponent"
      >
        <h1
          className="signup-title"
        >
          Sign Up for Teechuh
        </h1>
        <Form
          className="signup-form"
          onSubmit={this.handleSubmit}
        >
          <h4
            className="signup-account-type-header"
          >
            Account Type:
          </h4>
          <div className="signup-account-type-wrapper">
            <div className="signup-radio-btn-wrapper">
              <Input
                className="signup-input-radio"
                name="accountType"
                onChange={this.handleInput('accountType')}
                type="radio"
                value="student"
              />
              <span>Student</span>
            </div>
            <div className="signup-radio-btn-wrapper">
              <Input
                className="signup-input-radio"
                name="accountType"
                onChange={this.handleInput('accountType')}
                type="radio"
                value="instructor"
              />
              <span>Instructor</span>
            </div>
          </div>
          <Input
            className="signup-input"
            onChange={this.handleInput('firstName')}
            placeholder="First Name"
            value={this.state.firstName}
            type="text"
          />
          <Input
            className="signup-input"
            onChange={this.handleInput('lastName')}
            placeholder="Password"
            value={this.state.lastName}
            type="text"
          />

          <Input
            className="signup-input"
            onChange={this.handleInput('email')}
            placeholder="Email"
            value={this.state.email}
            type="text"
          />
          <Input
            className="signup-input"
            onChange={this.handleInput('password')}
            placeholder="Password"
            value={this.state.password}
            type="password"
          />
          <Input
            className="signup-input"
            onChange={this.handleInput('zipCode')}
            placeholder="Zip Code"
            value={this.state.zipCode}
            type="text"
          />
          <button
            className="signup-submit-btn"
            data-test="submitButton"
            type="submit"
          >
            Sign Up
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
