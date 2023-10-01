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
    const isSearchFilterPassed = checkSearchFilter({
      filter: filters.search,
      value: `${patient.first_name} ${patient.last_name} ${patient.patient_id}`,
    });

    const isGenderFilterPassed = checkGenderFilter({
      filter: filters.gender,
      value: patient.gender,
    });
    const isAgeFilterPassed = checkAgeFilter({
      filter: filters.age,
      value: patient.age,
    });

    return isSearchFilterPassed && isGenderFilterPassed && isAgeFilterPassed;
  });

  return { filteredPatients };
};
