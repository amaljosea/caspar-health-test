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

export const checkAgeFilter = ({
  value,
  filter,
}: {
  value: number;
  filter: AgeFilterValue;
}) => {
  if (filter === "any") {
    return true;
  }
  if (filter === "18to20") {
    return value >= 18 && value <= 20;
  }
  if (filter === "31to45") {
    return value >= 31 && value <= 45;
  }
  if (filter === "above45") {
    return value > 45;
  }
  return false;
};

export const checkGenderFilter = ({
  value,
  filter,
}: {
  value: string;
  filter: GenderFilterValue;
}) => filter === "any" || value === filter;

export const checkSearchFilter = ({
  value,
  filter,
}: {
  value: string;
  filter: string;
}) => filter === "" || value.toLowerCase().includes(filter.toLowerCase());
