import { ShallowWrapper } from 'enzyme';

interface fBDAFunc {
  (wrapper: ShallowWrapper, attr: string): ShallowWrapper;
}

export const findByDataAttr: fBDAFunc = (wrapper, attr) => (
  wrapper.find(`[data-test="${attr}"]`)
);
