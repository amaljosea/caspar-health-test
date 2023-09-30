import {
  ageFilterOptions,
  genderFilterOptions,
  simpleclassName,
} from "@/constants";
import { Select } from "./Select";
import { FilterControls } from "@/hooks/useFilteredPatients";
import { AgeFilterValue, GenderFilterValue } from "@/utils/filter";

type FilterProps = {
  filterControls: FilterControls;
};

export const Filter = ({ filterControls }: FilterProps) => {
  const { gender, setGender, age, setAge, search, setSearch } = filterControls;
  return (
    <div className={simpleclassName}>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className={simpleclassName}
      />
      <Select<GenderFilterValue>
        label="Gender"
        value={gender}
        onChange={setGender}
        options={genderFilterOptions}
      />
      <Select<AgeFilterValue>
        label="Age"
        value={age}
        onChange={setAge}
        options={ageFilterOptions}
      />
    </div>
  );
};
