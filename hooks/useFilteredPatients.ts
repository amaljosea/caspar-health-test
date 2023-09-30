import { useContext, useMemo, useState } from "react";
import { PatientContext } from "@/context/PatientContext";
import { getFilteredPatients } from "@/utils/filter/getFilteredPatients";
import { AgeFilterValue, GenderFilterValue } from "@/utils/filter";
import { SortValue } from "@/constants";
import { getSortedPatients } from "@/utils/getSortedPatients";

export type FilterControls = {
  gender: GenderFilterValue;
  setGender: (value: GenderFilterValue) => void;
  age: AgeFilterValue;
  setAge: (value: AgeFilterValue) => void;
  search: string;
  setSearch: (value: string) => void;
  sort: SortValue;
  setSort: (value: SortValue) => void;
};

export const useFilteredPatients = () => {
  const [gender, setGender] = useState<GenderFilterValue>("any");
  const [age, setAge] = useState<AgeFilterValue>("any");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortValue>("asc");

  const { patients } = useContext(PatientContext);

  const { filteredAndSortedPatients } = useMemo(() => {
    const { filteredPatients } = getFilteredPatients({
      patients,
      filters: { gender, age, search },
    });
    const filteredAndSortedPatients = getSortedPatients({
      patients: filteredPatients,
      sort,
    });
    return { filteredAndSortedPatients };
  }, [gender, age, search, patients, sort]);

  return {
    patients: filteredAndSortedPatients,
    filterControls: {
      gender,
      setGender,
      age,
      setAge,
      search,
      setSearch,
      sort,
      setSort,
    },
  };
};
