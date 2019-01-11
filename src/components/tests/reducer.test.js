import demoReducer, { initialState } from '../reducer';
import { onToggleDemo } from '../actions';

describe('demoReducer', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(demoReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the toggleDemo action correctly', () => {
    const toggledState = {
      demo: !state.demo,
    };
    expect(demoReducer(state, onToggleDemo())).toEqual(toggledState);
  });
});
