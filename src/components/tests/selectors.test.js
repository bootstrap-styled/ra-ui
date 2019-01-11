import {
  selectBsDemo,
  makeSelectDemo,
} from '../selectors';

describe('Demo Selectors', () => {
  let state;
  let demoState;

  beforeEach(() => {
    demoState = {
      demo: false,
    };
    state = {
      'bs.demo': demoState,
    };
  });

  describe('selectBsDemo', () => {
    it('should select the demo state', () => {
      expect(selectBsDemo(state)).toEqual(demoState);
    });
  });
  describe('makeSelectDemo', () => {
    it('should select demo', () => {
      expect(makeSelectDemo()(state)).toEqual(demoState.demo);
    });
  });
});
