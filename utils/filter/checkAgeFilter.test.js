import { checkAgeFilter } from ".";

const testConfig = [
  ["any", 0, true],
  ["18to20", 1, false],
  ["18to20", 17, false],
  ["18to20", 18, true],
  ["18to20", 20, true],
  ["18to20", 21, false],
];

describe("checkAgeFilter", () => {
  it("should return true", () => {
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
