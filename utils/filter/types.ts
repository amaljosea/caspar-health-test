import { Patient } from "@/index";

export type GenderFilterValue = "any" | "Male" | "Female";
export type AgeFilterValue = "any" | "18to20" | "31to45" | "above45";

export type GenderFilterOption = {
  label: string;
  value: GenderFilterValue;
};

export type AgeFilterOption = {
  label: string;
  value: AgeFilterValue;
};

export type GetFilteredPatients = {
  patients: Patient[];
  filters: {
    gender: GenderFilterValue;
    age: AgeFilterValue;
    search: string;
  };
};
