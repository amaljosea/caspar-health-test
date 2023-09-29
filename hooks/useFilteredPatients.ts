import { useContext, useState } from "react";
import { PatientContext } from "@/context/PatientContext";

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

export const useFilteredPatients = () => {
  const [gender, setGender] = useState("any");
  const [age, setAge] = useState("any");
  const [search, setSearch] = useState("");
  const { patients } = useContext(PatientContext);

  const filteredPatients = patients.filter((patient) => {
    const searchFilter =
      search === "" ||
      patient.first_name.toLowerCase().includes(search.toLowerCase());

    const genderFilter = gender === "any" || patient.gender === gender;

    const ageFilter = checkAgeFilter(patient.age, age);

    return searchFilter && genderFilter && ageFilter;
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
