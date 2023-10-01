import { getSortedPatients } from "../getSortedPatients";

describe("getSortedPatients", () => {
  const patients = [
    {
      first_name: "John",
      last_name: "Doe",
    },
    {
      first_name: "Jane",
      last_name: "Smith",
    },
    {
      first_name: "Alice",
      last_name: "Johnson",
    },
  ];

  it("should sort patients in ascending order by full name", () => {
    const sortedPatients = getSortedPatients({ patients, sort: "asc" });

    expect(sortedPatients).toEqual([
      {
        first_name: "Alice",
        last_name: "Johnson",
      },
      {
        first_name: "Jane",
        last_name: "Smith",
      },
      {
        first_name: "John",
        last_name: "Doe",
      },
    ]);
  });

  it("should sort patients in descending order by full name", () => {
    const sortedPatients = getSortedPatients({ patients, sort: "desc" });

    expect(sortedPatients).toEqual([
      {
        first_name: "John",
        last_name: "Doe",
      },
      {
        first_name: "Jane",
        last_name: "Smith",
      },
      {
        first_name: "Alice",
        last_name: "Johnson",
      },
    ]);
  });

  it("should return the same array if patients are already sorted", () => {
    const sortedPatientsAsc = getSortedPatients({ patients, sort: "asc" });

    expect(sortedPatientsAsc).toEqual([
      {
        first_name: "Alice",
        last_name: "Johnson",
      },
      {
        first_name: "Jane",
        last_name: "Smith",
      },
      {
        first_name: "John",
        last_name: "Doe",
      },
    ]);
  });
});
