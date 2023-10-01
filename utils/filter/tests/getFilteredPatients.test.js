import { getFilteredPatients } from "../getFilteredPatients"; // Import the function to be tested

describe("getFilteredPatients", () => {
  const patients = [
    {
      patient_id: 1,
      first_name: "John",
      last_name: "Doe",
      gender: "male",
      age: 25,
    },
    {
      patient_id: 2,
      first_name: "Jane",
      last_name: "Smith",
      gender: "female",
      age: 35,
    },
    {
      patient_id: 3,
      first_name: "Alice",
      last_name: "Johnson",
      gender: "female",
      age: 45,
    },
  ];

  it("should return filtered patients based on all filters", () => {
    const filters = {
      gender: "female",
      age: "31to45",
      search: "Jane Smith",
    };

    const { filteredPatients } = getFilteredPatients({ patients, filters });

    expect(filteredPatients).toEqual([
      {
        patient_id: 2,
        first_name: "Jane",
        last_name: "Smith",
        gender: "female",
        age: 35,
      },
    ]);
  });

  it("should return all patients if no filters are applied", () => {
    const filters = {
      gender: "any",
      age: "any",
      search: "",
    };

    const { filteredPatients } = getFilteredPatients({ patients, filters });

    expect(filteredPatients).toEqual(patients);
  });

  it("should return an empty array if no patients match the filters", () => {
    const filters = {
      gender: "male",
      age: "above45",
      search: "Nonexistent Name",
    };

    const { filteredPatients } = getFilteredPatients({ patients, filters });

    expect(filteredPatients).toEqual([]);
  });
});
