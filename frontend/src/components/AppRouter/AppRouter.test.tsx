import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { AppRouter } from './AppRouter';
import { SignUp } from '../SignUp';
import { findByDataTestAttr } from '../../../tests';

describe('AppRouter component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {

  });

  it('Renders component', () => {
    const component = <AppRouter />;
    wrapper = shallow(component);
    console.log(wrapper.debug());
    console.log(wrapper.get(0));
    console.log(wrapper.instance() as AppRouter);
    const result = findByDataTestAttr(wrapper, 'appRouterComponent');

    expect(result.length).toBe(1);
  });

  it('Renders login page', () => {
    const component = (
      <MemoryRouter initialEntries={[ '/login' ]}>
        <AppRouter />
      </MemoryRouter>
    );
    wrapper = shallow(component);
    console.log(wrapper.debug());
  });

  it('Renders login page', () => {
    const component = (
      <MemoryRouter initialEntries={[ '/signup' ]}>
        <AppRouter />
      </MemoryRouter>
    );
    const wrapper2 = mount(component);
    console.log(wrapper2);
  });
});
