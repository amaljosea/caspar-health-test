import {
  SortValue,
  ageFilterOptions,
  genderFilterOptions,
  sortOptions,
} from "@/constants";
import { Select } from "./Select";
import { AgeFilterValue, GenderFilterValue } from "@/utils/filter";
import { PatientContext } from "@/context/PatientContext";
import { useContext } from "react";
import { PatientSearch } from "./PatientSearch";

export const PatientFilter = () => {
  const { patientFilterControls } = useContext(PatientContext);
  const {
    patientFilter: { sort, search, gender, age },
    changePatientFilter,
  } = patientFilterControls;

  return (
    <div className="container">
      <Select<SortValue>
        label="Sort"
        value={sort}
        onChange={(value) => changePatientFilter({ sort: value })}
        options={sortOptions}
      />
      <PatientSearch
        value={search}
        onChange={(value) => changePatientFilter({ search: value })}
      />
      <Select<GenderFilterValue>
        label="Gender"
        value={gender}
        onChange={(value) => changePatientFilter({ gender: value })}
        options={genderFilterOptions}
      />
      <Select<AgeFilterValue>
        label="Age"
        value={age}
        onChange={(value) => changePatientFilter({ age: value })}
        options={ageFilterOptions}
      />
    </div>
  );
};
