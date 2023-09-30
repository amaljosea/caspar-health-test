import { checkAgeFilter } from ".";

const testConfig = [
  // filter, value, result
  // Test for 'any'
  ["any", 0, true],
  // Tests for '18to20'
  ["18to20", 1, false],
  ["18to20", 17, false],
  ["18to20", 18, true],
  ["18to20", 19, true],
  ["18to20", 20, true],
  ["18to20", 21, false],
  // Tests for '31to45'
  ["31to45", 30, false],
  ["31to45", 31, true],
  ["31to45", 32, true],
  ["31to45", 45, true],
  ["31to45", 46, false],
  // Tests for 'above45'
  ["above45", 40, false],
  ["above45", 45, false],
  ["above45", 46, true],
  ["above45", 100, true],
];

describe("checkAgeFilter", () => {
  it("checkAgeFilter should work as expected for all the edge cases", () => {
    testConfig.forEach((config) => {
      expect(
        checkAgeFilter({
          filter: config[0],
          value: config[1],
        })
      ).toBe(config[2]);
    });
  });
});
