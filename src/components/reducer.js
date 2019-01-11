/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 */
import { ON_TOGGLE_DEMO } from './constants';

// The initial application state
export const initialState = {
  demo: false,
};

// Takes care of changing the application state
function demoReducer(state = initialState, action) {
  switch (action.type) {
    case ON_TOGGLE_DEMO: {
      const newState = Object.assign({}, state, { demo: !state.demo });
      return newState;
    }
    default:
      return state;
  }
}

export default demoReducer;
