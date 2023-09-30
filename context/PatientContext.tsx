"use client";
import { ReactNode, createContext, useState } from "react";
import patientsInitialData from "../mock_data.json";
import { Patient } from "..";
import { AgeFilterValue, GenderFilterValue } from "@/utils/filter";
import { SortValue } from "@/constants";

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

const noop = () => null;

type PatientContextType = {
  patients: Patient[];
  filterControls: FilterControls;
};

export const PatientContext = createContext<PatientContextType>({
  patients: [],
  filterControls: {
    gender: "any",
    setGender: noop,
    age: "any",
    setAge: noop,
    sort: "asc",
    setSort: noop,
    search: "",
    setSearch: noop,
  },
});

type PatientContextProviderProps = {
  children: ReactNode;
};

export const PatientContextProvider = ({
  children,
}: PatientContextProviderProps) => {
  const [patients] = useState(patientsInitialData);
  const [gender, setGender] = useState<GenderFilterValue>("any");
  const [age, setAge] = useState<AgeFilterValue>("any");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortValue>("asc");

  return (
    <PatientContext.Provider
      value={{
        patients,
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
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};
