import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GeoSearchBox, GeoSearchBoxProps } from './GeoSearchBox';
import { findByDataTestAttr } from '../../../../tests';

describe('Search component', () => {
  let props: GeoSearchBoxProps;
  let wrapper: ShallowWrapper<GeoSearchBoxProps>;
  let mockFunc: jest.Mock;

  beforeEach(() => {
    mockFunc = jest.fn();
    props = {
      location: '123456',
      onChange: mockFunc,
    };
    const component = <GeoSearchBox { ...props } />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'geoSearchBoxComponent');

    expect(result.length).toBe(1);
  });

  it('Displays correct location value', () => {
    const result = wrapper.prop('value');

    expect(result).toBe(props.location);
  });

  it('Fires onChange event handler', () => {
    wrapper.simulate('change');
    wrapper.simulate('change');
    const result = mockFunc.mock.calls.length;

    expect(result).toBe(2);
  });
});
