import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header, HeaderProps } from './Header';

describe('Header Component', () => {
  const props: HeaderProps = {
    headerProp: 'Que me cuentas guey?',
  };
  let wrapper: ShallowWrapper<HeaderProps>;
  let instance: Header;

  beforeEach(() => {
    const component = <Header { ...props } />;
    wrapper = shallow(component);
    instance = wrapper.instance() as Header;
  });

  it('Renders component', () => {
    // console.log(wrapper.debug());
    const result = instance.add(4);
    expect(result).toBe(9);
  });
});
