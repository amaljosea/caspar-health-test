import { ageOptions, genderOptions, simpleclassName } from "@/constants";
import { Select } from "./Select";
import { FilterControls } from "@/hooks/useFilteredPatients";

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
      <Select
        label="Gender"
        value={gender}
        onChange={setGender}
        options={genderOptions}
      />
      <Select label="Age" value={age} onChange={setAge} options={ageOptions} />
    </div>
  );
};
