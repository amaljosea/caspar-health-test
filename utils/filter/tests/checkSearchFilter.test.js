import { checkSearchFilter } from "../filters";

describe("checkSearchFilter", () => {
  const testCases = [
    { value: "apple", filter: "", expected: true },
    { value: "banana", filter: "", expected: true },
    { value: "cherry", filter: "", expected: true },
    { value: "apple", filter: "app", expected: true },
    { value: "banana", filter: "ban", expected: true },
    { value: "cherry", filter: "cher", expected: true },
    { value: "apple", filter: "le", expected: true },
    { value: "banana", filter: "na", expected: true },
    { value: "cherry", filter: "rry", expected: true },
    { value: "apple", filter: "peach", expected: false },
    { value: "banana", filter: "orange", expected: false },
    { value: "cherry", filter: "grape", expected: false },
    { value: "Apple", filter: "app", expected: true }, // Case-insensitive test
    { value: "Banana", filter: "BAN", expected: true }, // Case-insensitive test
    { value: "Cherry", filter: "CheR", expected: true }, // Case-insensitive test
    { value: "", filter: "non-empty", expected: false },
    { value: "non-empty", filter: "non-empty", expected: true },
  ];

  testCases.forEach((testCase) => {
    it(`should return ${testCase.expected} for value="${testCase.value}" and filter="${testCase.filter}"`, () => {
      expect(
        checkSearchFilter({ value: testCase.value, filter: testCase.filter })
      ).toBe(testCase.expected);
    });
  });
});
