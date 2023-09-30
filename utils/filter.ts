import { Patient } from "..";

export type GenderFilterValue = "any" | "Male" | "Female";

type GenderFilterOption = {
  label: string;
  value: GenderFilterValue;
};

export type AgeFilterValue = "any" | "18to20" | "31to45" | "above45";

type AgeFilterOption = {
  label: string;
  value: AgeFilterValue;
};

export const genderFilterOptions: GenderFilterOption[] = [
  { label: "Any", value: "any" },
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

export const ageFilterOptions: AgeFilterOption[] = [
  { label: "Any", value: "any" },
  { label: "18 - 30", value: "18to20" },
  { label: "31 - 45", value: "31to45" },
  { label: " > 45", value: "above45" },
];

const ageFilter = (age: number, ageFilter: AgeFilterValue) => {
  if (ageFilter === "any") {
    return true;
  }
  if (ageFilter === "18to20") {
    return age >= 18 && age <= 20;
  }
  if (ageFilter === "31to45") {
    return age >= 31 && age <= 45;
  }
  if (ageFilter === "above45") {
    return age > 45;
  }
  return false;
};

type GetFilteredPatients = {
  patients: Patient[];
  filters: {
    gender: GenderFilterValue;
    age: AgeFilterValue;
    search: string;
  };
};

export const getFilteredPatients = ({
  patients,
  filters: { gender, age, search },
}: GetFilteredPatients) => {
  const filteredPatients = patients.filter((patient) => {
    const isSearchFilterPassed =
      search === "" ||
      patient.first_name.toLowerCase().includes(search.toLowerCase());
    const isGenderFilterPassed = gender === "any" || patient.gender === gender;
    const isAgeFilterPassed = ageFilter(patient.age, age);

    return isSearchFilterPassed && isGenderFilterPassed && isAgeFilterPassed;
  });

  return { filteredPatients };
};