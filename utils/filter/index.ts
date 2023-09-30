import { Patient } from "@/index";

export type GenderFilterValue = "any" | "Male" | "Female";

export type GenderFilterOption = {
  label: string;
  value: GenderFilterValue;
};

export type AgeFilterValue = "any" | "18to20" | "31to45" | "above45";

export type AgeFilterOption = {
  label: string;
  value: AgeFilterValue;
};

export const checkAgeFilter = (age: number, ageFilter: AgeFilterValue) => {
  if (ageFilter === "any") {
    return true;
  }
  if (ageFilter === "18to20") {
    return age >= 18 && age <= 20;
  }
  if (ageFilter === "31to45") {
    return age >= 31 && age <= 45;
  }
  if (ageFilter === "above45") {
    return age > 45;
  }
  return false;
};

export const checkGenderFilter = (
  gender: GenderFilterValue,
  ageFilter: GenderFilterValue
) => ageFilter === "any" || gender === ageFilter;

export const checkSearchFilter = (value: string, filter: string) =>
  filter === "" || value.toLowerCase().includes(filter.toLowerCase());
