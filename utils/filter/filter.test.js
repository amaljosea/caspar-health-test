import { checkAgeFilter } from ".";

describe("checkAgeFilter", () => {
  it("should return true", () => {
    expect(
      checkAgeFilter({
        filter: "any",
        value: 0,
      })
    ).toBe(true);
  });
});
