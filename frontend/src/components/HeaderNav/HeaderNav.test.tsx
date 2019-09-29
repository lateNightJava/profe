import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AuthNav } from './AuthNav';
import { HeaderNav, HeaderNavProps } from './HeaderNav';
import { UserNav } from './UserNav';
import { findByDataTestAttr } from '../../../tests';

describe('HeaderNav component', () => {
  let wrapper: ShallowWrapper<HeaderNavProps>;

  beforeEach(() => {
    const component = <HeaderNav authenticated={false} />;

    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'headerNavComponent');

    expect(result.length).toBe(1);
  });

  it('Renders AuthNav component when unauthenticated', () => {
    const result = wrapper.find(AuthNav);
    const result2 = wrapper.find(UserNav);

    expect(result.length).toBe(1);
    expect(result2.length).toBe(0);
  });

  it('Renders UserNav component when authenticated', () => {
    wrapper.setProps({ authenticated: true });
    const result = wrapper.find(AuthNav);
    const result2 = wrapper.find(UserNav);

    expect(result.length).toBe(0);
    expect(result2.length).toBe(1);
  });
});
