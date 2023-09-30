import { useContext, useMemo, useState } from "react";
import { PatientContext } from "@/context/PatientContext";
import { getFilteredPatients } from "@/utils/filter/getFilteredPatients";
import { AgeFilterValue, GenderFilterValue } from "@/utils/filter";

export type FilterControls = {
  gender: GenderFilterValue;
  setGender: (value: GenderFilterValue) => void;
  age: AgeFilterValue;
  setAge: (value: AgeFilterValue) => void;
  search: string;
  setSearch: (value: string) => void;
};

export const useFilteredPatients = () => {
  const [gender, setGender] = useState<GenderFilterValue>("any");
  const [age, setAge] = useState<AgeFilterValue>("any");
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
