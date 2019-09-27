import { ShallowWrapper } from 'enzyme';

interface fBDATFunc {
  (wrapper: ShallowWrapper, attr: string): ShallowWrapper;
}

export const findByDataTestAttr: fBDATFunc = (wrapper, attr) => (
  wrapper.find(`[data-test="${attr}"]`)
);
