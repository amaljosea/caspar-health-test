import { checkAgeFilter } from "../filters";

describe("checkAgeFilter", () => {
  const testCases = [
    { value: 25, filter: "any", expected: true },
    { value: 18, filter: "18to20", expected: true },
    { value: 20, filter: "18to20", expected: true },
    { value: 17, filter: "18to20", expected: false },
    { value: 21, filter: "18to20", expected: false },
    { value: 31, filter: "31to45", expected: true },
    { value: 45, filter: "31to45", expected: true },
    { value: 30, filter: "31to45", expected: false },
    { value: 46, filter: "31to45", expected: false },
    { value: 46, filter: "above45", expected: true },
    { value: 100, filter: "above45", expected: true },
    { value: 45, filter: "above45", expected: false },
    { value: 44, filter: "above45", expected: false },
    { value: 25, filter: "unknown", expected: false },
    { value: 18.5, filter: "18to20", expected: true },
    { value: -10, filter: "18to20", expected: false },
    { value: -1, filter: "31to45", expected: false },
    { value: NaN, filter: "18to20", expected: false },
    { value: undefined, filter: "18to20", expected: false },
  ];

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} for value=${testCase.value} and filter=${testCase.filter}`, () => {
      expect(
        checkAgeFilter({ value: testCase.value, filter: testCase.filter })
      ).toBe(testCase.expected);
    });
  });
});
