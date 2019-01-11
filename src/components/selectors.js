export const selectBsDemo = (state) => state['bs.demo'];
export const makeSelectDemo = () => (state) => selectBsDemo(state).demo;
