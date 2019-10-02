import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AuthNav } from './AuthNav';
import { Button } from '../../Utils/Button';
import { findByDataTestAttr } from '../../../../tests';

describe('AuthNav component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const component = <AuthNav />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'authNavComponent');

    expect(result.length).toBe(1);
  });

  it('Render login button', () => {
    const result = findByDataTestAttr(wrapper, 'loginLink');

    expect(result.length).toBe(1);
  });

  it('Renders sign up button', () => {
    const result = findByDataTestAttr(wrapper, 'signUpLink');

    expect(result.length).toBe(1);
  });

  // it('Render login button', () => {
  //   const result = wrapper.find({ componentName: 'loginBtnComponent' }).dive();
  //
  //   expect(result.text()).toBe('Login');
  // });
  //
  // it('Renders sign up button', () => {
  //   const result = wrapper.find({ componentName: 'signUpBtnComponent' }).dive();
  //
  //   expect(result.text()).toBe('Sign Up');
  // });
});
