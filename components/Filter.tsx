import { ageOptions, sexOptions, simpleclassName } from "@/constants";
import { Select } from "./Select";
import { FilterControls } from "@/hooks/usePatients";

type FilterProps = {
  filterControls: FilterControls;
};

export const Filter = ({ filterControls }: FilterProps) => {
  const { sex, setSex, age, setAge, search, setSearch } = filterControls;
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
      <Select label="Sex" value={sex} onChange={setSex} options={sexOptions} />
      <Select label="Sex" value={age} onChange={setAge} options={ageOptions} />
    </div>
  );
};
