import { SortValue } from "@/constants";
import { AgeFilterValue, GenderFilterValue } from "@/utils/filter";
import { useCallback, useState } from "react";

type PatientFilter = {
  gender: GenderFilterValue;
  age: AgeFilterValue;
  search: string;
  sort: SortValue;
};

export type PatientFilterControls = {
  patientFilter: PatientFilter;
  changePatientFilter: (change: Partial<PatientFilter>) => void;
};

export const defaultPatientFilter: PatientFilter = {
  gender: "any",
  age: "any",
  sort: "asc",
  search: "",
};

export const usePatientFilterControls = () => {
  const [patientFilter, setPatientFilter] =
    useState<PatientFilter>(defaultPatientFilter);

  const changePatientFilter = useCallback((change: Partial<PatientFilter>) => {
    setPatientFilter((prev) => ({
      ...prev,
      ...change,
    }));
  }, []);

  return {
    patientFilter,
    changePatientFilter,
  };
};
