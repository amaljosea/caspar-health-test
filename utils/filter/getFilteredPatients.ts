import { Patient } from "@/index";
import {
  AgeFilterValue,
  GenderFilterValue,
  checkAgeFilter,
  checkGenderFilter,
  checkSearchFilter,
} from ".";

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
  filters,
}: GetFilteredPatients) => {
  const filteredPatients = patients.filter((patient) => {
    const isSearchFilterPassed = checkSearchFilter(
      patient.first_name,
      filters.search
    );

    filters.search === "" ||
      patient.first_name.toLowerCase().includes(filters.search.toLowerCase());

    const isGenderFilterPassed = checkGenderFilter(
      patient.gender,
      filters.gender
    );
    const isAgeFilterPassed = checkAgeFilter(patient.age, filters.age);

    return isSearchFilterPassed && isGenderFilterPassed && isAgeFilterPassed;
  });

  return { filteredPatients };
};
