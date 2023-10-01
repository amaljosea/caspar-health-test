import { checkGenderFilter } from "."; // Import the function to be tested

describe("checkGenderFilter", () => {
  const testCases = [
    { value: "male", filter: "any", expected: true },
    { value: "female", filter: "any", expected: true },
    { value: "non-binary", filter: "any", expected: true },
    { value: "male", filter: "male", expected: true },
    { value: "female", filter: "female", expected: true },
    { value: "non-binary", filter: "non-binary", expected: true },
    { value: "male", filter: "female", expected: false },
    { value: "female", filter: "male", expected: false },
    { value: "non-binary", filter: "male", expected: false },
    { value: "male", filter: "non-binary", expected: false },
    { value: "female", filter: "non-binary", expected: false },
    { value: "non-binary", filter: "female", expected: false },
  ];

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} for value="${testCase.value}" and filter="${testCase.filter}"`, () => {
      expect(
        checkGenderFilter({ value: testCase.value, filter: testCase.filter })
      ).toBe(testCase.expected);
    });
  });
});
