import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Utils/Button';
import './AuthNav.scss';

const AuthNav: React.FC = () => (
  <div
    className="auth-nav"
    data-test="authNavComponent"
  >
    <Link
      className="auth-nav-btn"
      data-test="loginLink"
      to="/login"
    >
      Login
    </Link>
    <Link
      className="auth-nav-btn"
      data-test="signUpLink"
      to="/signup"
    >
      Sign Up
    </Link>
  </div>
);

export {
  AuthNav,
};

// <Button
//   componentName="loginBtnComponent"
//   onClick={() => { console.log('login') }}
//   text="Login"
// />
// <Button
//   componentName="signUpBtnComponent"
//   onClick={() => { console.log('sign up') }}
//   text="Sign Up"
// />
