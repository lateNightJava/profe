import * as React from 'React';
import { shallow, ShallowWrapper } from 'enzyme';
import { Login, LoginState } from './Login';
import { findByDataTestAttr } from '../../../tests';

describe('Login component', () => {
  let wrapper: ShallowWrapper <{}, LoginState>;
  let instance: Login;
  let mockFunc: jest.Mock;

  beforeEach(() => {
    mockFunc = jest.fn();
    const component = <Login />;
    wrapper = shallow(component);
    instance = wrapper.instance() as Login;
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'loginComponent');

    expect(result.length).toBe(1);
  });

  it('Render form', () => {
    const result = findByDataTestAttr(wrapper, 'loginForm');

    expect(result.length).toBe(1);
  });

  it('Renders email input', () => {
    const result = wrapper.find({ dataTestAttr: "emailInputComponent" });

    expect(result.length).toBe(1);
  });

  it('Renders password input', () => {
    const result = wrapper.find({ dataTestAttr: "passwordInputComponent" });

    expect(result.length).toBe(1);
  });

  it('Renders submit button', () => {
    const result = findByDataTestAttr(wrapper, 'submitButton');

    expect(result.length).toBe(1);
  });

  it('Updates state for email', () => {
    instance.handleInput('email')({
      currentTarget: {
        value: 'Huaraches',
      },
    } as React.ChangeEvent<HTMLInputElement>);
    const result = instance.state;

    expect(result).toEqual({ email: 'Huaraches', password: '' });
  });

  it('Updates state for password', () => {
    instance.handleInput('password')({
      currentTarget: {
        value: 'Huaraches',
      },
    } as React.ChangeEvent<HTMLInputElement>);
    const result = instance.state;

    expect(result).toEqual({ email: '', password: 'Huaraches' });
  });

  it('Fires onSubmit event handler', () => {
    const loginForm = findByDataTestAttr(wrapper, 'loginForm');
    const submitBtn = findByDataTestAttr(wrapper, 'submitButton');
    console.log(loginForm.debug());
    console.log(loginForm.props());

    submitBtn.simulate('click');
    submitBtn.simulate('click');
    const result = mockFunc.mock.calls.length;

    expect(result).toBe(2);
  });
});
