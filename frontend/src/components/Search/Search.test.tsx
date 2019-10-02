import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Search, SearchState } from './Search';
import { SearchBox } from './SearchBox';
import { GeoSearchBox } from './GeoSearchBox';
import { findByDataTestAttr } from '../../../tests';

describe('Search component', () => {
  let wrapper: ShallowWrapper<{}, SearchState>;
  let instance: Search;

  beforeEach(() => {
    const component = <Search />;
    wrapper = shallow(component);
    instance = wrapper.instance() as Search;
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

  it('Updates state onChange for search', () => {
    const searchBox = wrapper.find(SearchBox).dive();
    searchBox.simulate('change', {
      currentTarget: {
        value: 'Churros',
      },
    });
    const result = wrapper.state();

    expect(result).toEqual({ search: 'Churros', location: '' });
  });

  it('Updates state onChange for location', () => {
    instance.handleChange('location')({
      currentTarget: {
        value: 'Churros',
      },
    } as React.ChangeEvent<HTMLInputElement>);
    const result = instance.state;

    expect(result).toEqual({ search: '', location: 'Churros' });
  });
});
