import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { App, AppProps } from './App';
import { AppRouter } from './AppRouter';
import { Header } from './Header';
import { Footer } from './Footer';
import { findByDataTestAttr } from '../../tests';

describe('App component', () => {
  let wrapper: ShallowWrapper<AppProps>;
  const props: AppProps = {
    compiler: 'Raspas',
    framework: 'Chicharrones',
  };

  beforeEach(() => {
    const component = <App { ...props } />;
    wrapper = shallow(component);
  });

  it('Renders component', () => {
    const result = findByDataTestAttr(wrapper, 'appComponent');

    expect(result.length).toBe(1);
  });

  it('Renders Header', () => {
    const result = wrapper.find(Header);

    expect(result.length).toBe(1);
  });

  it('Renders AppRouter', () => {
    const result = wrapper.find(AppRouter);

    expect(result.length).toBe(1);
  });

  it('Renders Footer', () => {
    const result = wrapper.find(Footer);

    expect(result.length).toBe(1);
  });
});
