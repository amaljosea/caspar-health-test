import { useContext, useState } from "react";
import { PatientContext } from "@/context/PatientContext";
import { Patient } from "..";

export type FilterControls = {
  gender: string;
  setGender: (value: string) => void;
  age: string;
  setAge: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
};

const checkAgeFilter = (age: number, ageFilter: string) => {
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
    gender: string;
    age: string;
    search: string;
  };
};

const getFilteredPatients = ({
  patients,
  filters: { gender, age, search },
}: GetFilteredPatients) => {
  const filteredPatients = patients.filter((patient) => {
    const isSearchFilterPassed =
      search === "" ||
      patient.first_name.toLowerCase().includes(search.toLowerCase());
    const isGenderFilterPassed = gender === "any" || patient.gender === gender;
    const isAgeFilterPassed = checkAgeFilter(patient.age, age);

    return isSearchFilterPassed && isGenderFilterPassed && isAgeFilterPassed;
  });

  return { filteredPatients };
};

export const useFilteredPatients = () => {
  const [gender, setGender] = useState("any");
  const [age, setAge] = useState("any");
  const [search, setSearch] = useState("");
  const { patients } = useContext(PatientContext);

  const { filteredPatients } = getFilteredPatients({
    patients,
    filters: { gender, age, search },
  });

  return {
    patients: filteredPatients,
    filterControls: {
      gender,
      setGender,
      age,
      setAge,
      search,
      setSearch,
    },
  };
};
