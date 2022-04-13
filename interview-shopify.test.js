// Jest main matchers : https://jestjs.io/docs/using-matchers

const myDummyFunction = require('./interview-shopify.js');

describe('myDummyFunction()', () => {
  it('should return false', () => {
    expect(myDummyFunction()).toBe(false);
  });
});