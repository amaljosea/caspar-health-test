import { AgeFilterOption, GenderFilterOption } from "@/utils/filter";

export const genderFilterOptions: GenderFilterOption[] = [
  { label: "Any", value: "any" },
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

export const ageFilterOptions: AgeFilterOption[] = [
  { label: "Any", value: "any" },
  { label: "18 - 30", value: "18to20" },
  { label: "31 - 45", value: "31to45" },
  { label: " > 45", value: "above45" },
];

export const sortOptions: SortOption[] = [
  { label: "Asc", value: "asc" },
  { label: "Desc", value: "desc" },
];

export type SortValue = "asc" | "desc";

type SortOption = {
  label: string;
  value: SortValue;
};
