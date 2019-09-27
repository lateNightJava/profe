import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GeoSearchBox } from './GeoSearchBox';
import { findByDataTestAttr } from '../../../../tests';

describe('Search component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const component = <GeoSearchBox />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    console.log(wrapper.debug());
    const result = findByDataTestAttr(wrapper, 'geoSearchBoxComponent');
    expect(result.length).toBe(1);
  });
});
