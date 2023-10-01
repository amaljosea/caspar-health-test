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

export const Filter = () => {
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
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => changePatientFilter({ search: e.target.value })}
        className="container"
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
