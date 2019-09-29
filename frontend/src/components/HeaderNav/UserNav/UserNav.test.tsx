import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { UserNav } from './UserNav';
import { findByDataTestAttr } from '../../../../tests';

describe('UserNav component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const component = <UserNav />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'userNavComponent');

    expect(result.length).toBe(1);
  });
});
