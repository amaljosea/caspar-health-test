import {
  SortValue,
  ageFilterOptions,
  genderFilterOptions,
  sortOptions,
} from "@/constants";
import { Select } from "./Select";
import { PatientContext } from "@/context/PatientContext";
import { useContext } from "react";
import { PatientSearch } from "./PatientSearch";
import { PatientFilterKey } from "@/hooks/usePatientFilterControls";
import { AgeFilterValue, GenderFilterValue } from "@/utils/filter/types";

export const PatientFilter = () => {
  const { patientFilterControls } = useContext(PatientContext);
  const {
    patientFilter: { sort, search, gender, age },
    changePatientFilter,
  } = patientFilterControls;

  const change =
    <T extends unknown>(type: PatientFilterKey) =>
    (value: T) =>
      changePatientFilter({ [type]: value });

  return (
    <div className="container">
      <Select<SortValue>
        label="Sort"
        value={sort}
        onChange={change<SortValue>("sort")}
        options={sortOptions}
      />
      <PatientSearch value={search} onChange={change<string>("search")} />
      <Select<GenderFilterValue>
        label="Gender"
        value={gender}
        onChange={change<GenderFilterValue>("gender")}
        options={genderFilterOptions}
      />
      <Select<AgeFilterValue>
        label="Age"
        value={age}
        onChange={change<AgeFilterValue>("age")}
        options={ageFilterOptions}
      />
    </div>
  );
};
