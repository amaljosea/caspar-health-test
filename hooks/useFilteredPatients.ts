import { useContext, useMemo, useState } from "react";
import { PatientContext } from "@/context/PatientContext";
import { AgeValue, GenderValue, getFilteredPatients } from "@/utils/filter";

export type FilterControls = {
  gender: string;
  setGender: (value: string) => void;
  age: string;
  setAge: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
};

export const useFilteredPatients = () => {
  const [gender, setGender] = useState<GenderValue>("any");
  const [age, setAge] = useState<AgeValue>("any");
  const [search, setSearch] = useState("");
  const { patients } = useContext(PatientContext);

  const { filteredPatients } = useMemo(
    () =>
      getFilteredPatients({
        patients,
        filters: { gender, age, search },
      }),
    [gender, age, search, patients]
  );

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
