import { SortValue } from "@/constants";
import { AgeFilterValue, GenderFilterValue } from "@/utils/filter";
import { useCallback, useMemo, useState } from "react";

export type PatientFilter = {
  gender: GenderFilterValue;
  age: AgeFilterValue;
  search: string;
  sort: SortValue;
};

export type PatientFilterKey = keyof PatientFilter;

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

  console.log("Render usePatientFilterControls");
  const changePatientFilter = useCallback(
    (change: Partial<PatientFilter>) => {
      setPatientFilter((prev) => ({
        ...prev,
        ...change,
      }));
    },
    [setPatientFilter]
  );

  const value = useMemo(
    () => ({
      patientFilter,
      changePatientFilter,
    }),
    [patientFilter, changePatientFilter]
  );
  return value;
};
