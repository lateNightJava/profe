import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Footer, FooterProps } from './Footer';
import { findByDataAttr } from '../../../tests';

describe('Footer component', () => {
  const props: FooterProps = {
    footerProp: 'Que me cuentas guey?',
  };
  let wrapper: ShallowWrapper<FooterProps>;
  let result: ShallowWrapper | string | number;

  beforeEach(() => {
    const component = <Footer { ...props } />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    // console.log(wrapper.debug());
    result = findByDataAttr(wrapper, 'footerComponent');
    expect(result.length).toBe(1);
  });
});
