import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { shallow, ShallowWrapper } from 'enzyme';
import { AppRouter } from './AppRouter';
import { findByDataTestAttr } from '../../../tests';

describe('AppRouter component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {

  });

  it('Renders component', () => {
    const component = <AppRouter />;
    const wrapper: ShallowWrapper = shallow(component);
    console.log(wrapper.debug());
    const result = findByDataTestAttr(wrapper, 'appRouterComponent');

    expect(result.length).toBe(1);
  });
});
