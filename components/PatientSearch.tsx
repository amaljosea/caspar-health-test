import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

type PatientSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const PatientSearch = ({ onChange, value }: PatientSearchProps) => {
  const [search, setSearch] = useState(value);
  const debouncedSearch = useDebounce<string>(search);

  useEffect(() => {
    if (debouncedSearch !== value) {
      onChange(debouncedSearch);
    }
  }, [debouncedSearch, value]);

  return (
    <input
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="container"
    />
  );
};
