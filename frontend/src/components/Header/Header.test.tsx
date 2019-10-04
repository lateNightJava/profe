import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header, HeaderProps } from './Header';
import { HeaderNav } from '../HeaderNav';
import { Search } from '../Search';
import { findByDataTestAttr } from '../../../tests';

describe('Header Component', () => {
  let instance: Header;
  const props: HeaderProps = {
    headerProp: 'Que me cuentas guey?',
  };
  let wrapper: ShallowWrapper<HeaderProps>;

  beforeEach(() => {
    const component = <Header { ...props } />;
    wrapper = shallow(component);
    instance = wrapper.instance() as Header;
  });

  it('Has public add()', () => {
    const result = instance.add(4);

    expect(result).toBe(9);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'headerComponent');

    expect(result.length).toBe(1);
  });

  it('Renders logo', () => {
    const result = findByDataTestAttr(wrapper, 'headerLogo');

    expect(result.length).toBe(1);
  });

  it('Renders search component', () => {
    const result = wrapper.find(Search).dive();

    expect(result.length).toBe(1);
  });

  it('Renders header nav component', () => {
    const result = wrapper.find(HeaderNav).dive();

    expect(result.length).toBe(1);
  });
});
