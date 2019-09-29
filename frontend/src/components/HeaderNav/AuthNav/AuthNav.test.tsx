import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AuthNav } from './AuthNav';
import { findByDataTestAttr } from '../../../../tests';

describe('AuthNav component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    const component = <AuthNav />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'authNavComponent');

    expect(result.length).toBe(1);
  });
});
