import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Input, InputProps } from './Input';
import { findByDataTestAttr } from '../../../../tests';

describe('Input component', () => {
  let wrapper: ShallowWrapper<InputProps>;
  let mockFunc: jest.Mock;
  let props: InputProps;

  beforeEach(() => {
    mockFunc = jest.fn();
    props = {
      className: 'myInput',
      dataTestAttr: 'inputComponent',
      placeholder: 'Huevos Rancheros',
      onChange: mockFunc,
      value: 'Chile con carne',
      type: 'password',
    };
    const component = <Input { ...props } />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, props.dataTestAttr);

    expect(result.length).toBe(1);
  });

  it('Has correct prop values', () => {
    const result = wrapper.props();

    expect(result.className).toBe(props.className);
    expect(wrapper.prop('data-test')).toBe(props.dataTestAttr);
    expect(result.placeholder).toBe(props.placeholder);
    expect(result.value).toBe(props.value);
    expect(result.type).toBe(props.type);
  });

  it('Fires onChange event handler', () => {
    wrapper.simulate('change');
    wrapper.simulate('change');
    const result = mockFunc.mock.calls.length;

    expect(result).toBe(2);
  });
});
