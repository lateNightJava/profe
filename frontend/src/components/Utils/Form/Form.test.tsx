import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Form, FormProps } from './Form';
import { findByDataTestAttr } from '../../../../tests';

describe('Form component', () => {
  let mockFunc: jest.Mock;
  let props: FormProps;
  let wrapper: ShallowWrapper<FormProps>;

  beforeEach(() => {
    mockFunc = jest.fn();
    props = {
      onSubmit: mockFunc,
    };

    const component = (
      <Form { ...props }>
        <h1>Sup Guey!</h1>
        <h1>Que onda?</h1>
        <div>Chanooo!</div>
      </Form>
    );
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'formComponent');

    expect(result.length).toBe(1);
  });

  it('Renders correct children', () => {
    const result = wrapper.find('h1');
    const result2 = wrapper.find('div');

    expect(result.length).toBe(2);
    expect(result2.length).toBe(1);
  });

  it('Fires onSubmit event handler', () => {
    wrapper.simulate('submit');
    wrapper.simulate('submit');

    const result = mockFunc.mock.calls.length;

    expect(result).toBe(2);
  });
});
