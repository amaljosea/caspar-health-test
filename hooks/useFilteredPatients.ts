import { useContext, useState } from "react";
import { PatientContext } from "@/context/PatientContext";

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

  return {
    patients,
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
