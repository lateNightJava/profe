import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Footer, FooterProps } from './Footer';

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
    const result: ShallowWrapper = wrapper.find(
      '[data-test="footerComponent"]'
    );
    expect(result.length).toBe(1);
  });
});
