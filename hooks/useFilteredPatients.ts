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

    return searchFilter && genderFilter;
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
