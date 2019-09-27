import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Search } from './Search';
import { SearchBox } from './SearchBox';
import { GeoSearchBox } from './GeoSearchBox';
import { findByDataTestAttr } from '../../../tests';

describe('Search component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const component = <Search />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'searchComponent');
    expect(result.length).toBe(1);
  });

  it('Renders search box component', () => {
    const result = wrapper.find(SearchBox);
    expect(result.length).toBe(1);
  });

  it('Renders geosearch box component', () => {
    const result = wrapper.find(GeoSearchBox);
    expect(result.length).toBe(1);
  });
});
