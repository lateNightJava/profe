import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HeaderNav } from './HeaderNav';
import { findByDataTestAttr } from '../../../tests';

describe('HeaderNav component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const component = <HeaderNav />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'headerNavComponent');
    expect(result.length).toBe(1);
  });
});
