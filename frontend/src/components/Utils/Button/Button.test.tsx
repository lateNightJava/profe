import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Button, ButtonProps } from './Button';
import { findByDataTestAttr } from '../../../../tests';

describe('Button component',  () => {
  let props: ButtonProps;
  let mockFunc: jest.Mock;
  let wrapper: ShallowWrapper<ButtonProps>;

  beforeEach(() => {
    mockFunc = jest.fn();
    props = {
      componentName: 'buttonComponent',
      onClick: mockFunc,
      text: 'Carne Guisada',
    };

    const component = <Button { ...props } />;
    wrapper = shallow(component);
  });

  it('Renders button', () => {
    const result = findByDataTestAttr(wrapper, props.componentName);
    const result2 = wrapper.text();

    expect(result.length).toBe(1);
    expect(result2).toBe(props.text);
  });

  it('Fires onClick event handler', () => {
    wrapper.simulate('click');
    wrapper.simulate('click');
    const result = mockFunc.mock.calls.length;

    expect(result).toBe(2);
  });
});
