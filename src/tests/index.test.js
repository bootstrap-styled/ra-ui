/**
 * Testing exports
 */
const exported = require('../index');
describe('exports', () => {
  Object.keys(exported).forEach((e) => {
    it(`should exports ${e}`, () => {
      expect(exported[e]).toBeDefined();
    });
  });
});
