// Jest main matchers : https://jestjs.io/docs/using-matchers

const { myFooFunction, myBarFunction } = require('./interview-shopify.js');

describe('myFooFunction()', () => {
  it('should return false', () => {
    expect(myFooFunction()).toBe(false);
  });
});

describe('myBarFunction()', () => {
  it('should return true', () => {
    expect(myBarFunction()).toBe(true);
  });
});