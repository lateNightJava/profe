import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SearchBox, SearchBoxProps } from './SearchBox';
import { findByDataTestAttr } from '../../../../tests';

describe('Search component', () => {
  let mockFunc: jest.Mock;
  let props: SearchBoxProps;
  let wrapper: ShallowWrapper<SearchBoxProps>;

  beforeEach(() => {
    mockFunc = jest.fn();
    props = {
      search: 'Sup Guey',
      onChange: mockFunc,
    };
    const component = <SearchBox { ...props } />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'searchBoxComponent');

    expect(result.length).toBe(1);
  });

  it('Displays correct search value', () => {
    const result = wrapper.prop('value');

    expect(result).toBe(props.search);
  });

  it('Fires onChange event handler', () => {
    wrapper.simulate('change');
    wrapper.simulate('change');
    const result = mockFunc.mock.calls.length;

    expect(result).toBe(2);
  });
});
