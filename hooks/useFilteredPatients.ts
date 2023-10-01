import { useContext, useMemo } from "react";
import { PatientContext } from "@/context/PatientContext";
import { getFilteredPatients } from "@/utils/filter/getFilteredPatients";
import { getSortedPatients } from "@/utils/getSortedPatients";
import { useDebounce } from "./useDebounce";

export const useFilteredPatients = () => {
  const { patients, patientFilterControls } = useContext(PatientContext);

  const {
    patientFilter: { gender, age, search: liveSearch, sort },
  } = patientFilterControls;

  const search = useDebounce<string>(liveSearch);

  const { filteredAndSortedPatients } = useMemo(() => {
    const { filteredPatients } = getFilteredPatients({
      patients,
      filters: { gender, age, search },
    });
    const filteredAndSortedPatients = getSortedPatients({
      patients: filteredPatients,
      sort,
    });
    return { filteredAndSortedPatients };
  }, [gender, age, search, patients, sort]);

  return {
    patients: filteredAndSortedPatients,
  };
};
