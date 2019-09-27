import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Footer, FooterProps } from './Footer';
import { findByDataTestAttr } from '../../../tests';

describe('Footer component', () => {
  const props: FooterProps = {
    footerProp: 'Que me cuentas guey?',
  };
  let wrapper: ShallowWrapper<FooterProps>;

  beforeEach(() => {
    const component = <Footer { ...props } />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    // console.log(wrapper.debug());
    const result = findByDataTestAttr(wrapper, 'footerComponent');
    expect(result.length).toBe(1);
  });

  it('Renders logo', () => {
    const result: ShallowWrapper = findByDataTestAttr(wrapper, '');
  });
});
