import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SearchBox } from './SearchBox';
import { findByDataTestAttr } from '../../../../tests';

describe('Search component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const component = <SearchBox />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'searchBoxComponent');
    expect(result.length).toBe(1);
  });
});
