import { useContext, useState } from "react";
import { PatientContext } from "@/context/PatientContext";
import { Patient } from "..";

export type FilterControls = {
  sex: string;
  setSex: (value: string) => void;
  age: string;
  setAge: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
};

export const useFilteredPatients = () => {
  const [sex, setSex] = useState("any");
  const [age, setAge] = useState("any");
  const [search, setSearch] = useState("");
  const { patients } = useContext(PatientContext);

  const filteredPatients = patients.filter((patient) => {
    const searchFilter =
      search === "" ||
      patient.first_name.toLowerCase().includes(search.toLowerCase());

    return searchFilter;
  });

  return {
    patients: filteredPatients,
    filterControls: {
      sex,
      setSex,
      age,
      setAge,
      search,
      setSearch,
    },
  };
};
