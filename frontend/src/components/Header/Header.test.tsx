import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { create, ReactTestRenderer } from 'react-test-renderer';
import { Header, HeaderProps } from './Header';

describe('Header Component', () => {
  const props: HeaderProps = {
    headerProp: 'Que me cuentas guey?',
  };
  let wrapper: ShallowWrapper<HeaderProps>;
  let snapshot: ReactTestRenderer;

  beforeEach(() => {
    const component = <Header { ...props } />;

    wrapper = shallow(component);
    snapshot = create(component);
  });

  it('Renders component', () => {
    console.log(wrapper.debug());
    console.log(snapshot.getInstance());
    expect(2).toBe(1);
  });
});
