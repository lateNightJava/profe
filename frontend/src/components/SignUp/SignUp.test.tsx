import * as React from 'React';
import { shallow, ShallowWrapper } from 'enzyme';
import { SignUp, SignUpState } from './SignUp';
import { findByDataTestAttr } from '../../../tests';

describe('SignUp component', () => {
  let instance: SignUp;
  let mockFunc: jest.Mock;
  let wrapper: ShallowWrapper <{}, SignUpState>;
  const emptyState: SignUpState = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    zipCode: '',
  };

  beforeEach(() => {
    mockFunc = jest.fn();
    const component = <SignUp />;
    wrapper = shallow(component);
    instance = wrapper.instance() as SignUp;
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'signUpComponent');

    expect(result.length).toBe(1);
  });

  it('Render form', () => {
    const result = wrapper.find({ onSubmit: instance.handleSubmit });

    expect(result.length).toBe(1);
  });

  it('Renders email input', () => {
    const result = wrapper.find({ type: 'text' });

    expect(result.length).toBe(1);
  });

  it('Renders password input', () => {
    const result = wrapper.find({ type: 'password' });

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

  it('Clears state after handling submit', () => {
    instance.handleInput('password')({
      currentTarget: {
        value: 'Huaraches',
      },
    } as React.ChangeEvent<HTMLInputElement>);
    const result = instance.state;

    instance.handleSubmit({
      preventDefault: () => { return; },
    } as React.FormEvent<HTMLFormElement>);
    const result2 = instance.state;

    expect(result).toEqual({ email: '', password: 'Huaraches' });
    expect(result2).toEqual({ email: '', password: '' });
  });
});
