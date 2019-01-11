import { ON_TOGGLE_DEMO } from '../constants';

import { onToggleDemo } from '../actions';

describe('Demo Actions', () => {
  describe('onToggleDemo', () => {
    it('should return the correct type', () => {
      const expectedResult = { type: ON_TOGGLE_DEMO };
      expect(onToggleDemo()).toEqual(expectedResult);
    });
  });
});
